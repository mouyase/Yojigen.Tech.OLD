jQuery(function($){
	$.extend({
		wpjam_show_modal: function(modal_id, title, width){
			if($('#'+modal_id).length){
				width	= width || $('#'+modal_id).data('width') || 720;
				title	= title || $('#'+modal_id).data('title') || ' '; 
				tb_show(title, '#TB_inline?inlineId='+modal_id+'&width='+width);
			}
		},

		wpjam_notice: function(notice, type){
			let notice_id	= '';

			if($('#TB_ajaxContent').length > 0){
				notice_id	='wpjam_action_notice';

				if($('#TB_ajaxContent #'+notice_id).length < 1){
					$('#TB_ajaxContent').prepend('<div id="'+notice_id+'" class="notice is-dismissible hidden"></div>');
				}
			}else{
				notice_id	='wpjam_notice';

				if($('#'+notice_id).length < 1){
					$('hr.wp-header-end').after('<div id="'+notice_id+'" class="notice is-dismissible inline hidden"></div>');
				}
			}

			$('#'+notice_id).html('<p><strong>'+notice+'</strong></p>')
			.removeClass('notice-success notice-error notice-info hidden')
			.addClass('notice-'+type).css('opacity', 0)
			.slideDown(200, function(){
				$(this).fadeTo(200, 1, function(){
					let _this = $(this);

					if(_this.find('button.notice-dismiss').length > 0){
						return;
					}

					let button = $('<button type="button" class="notice-dismiss"><span class="screen-reader-text">忽略此提示。</span></button>' );
					
					button.on('click.wp-dismiss-notice', function(e){
						e.preventDefault();
						_this.fadeTo(100, 0, function(){
							_this.slideUp(100, function(){
								_this.remove();
							});
						});
					});

					_this.append(button);

					if($('#TB_ajaxContent').length > 0){
						$('#TB_ajaxContent').scrollTop(0);
					}
				});
			});

			return $(this);
		},

		wpjam_loading: function(action_type, args){
			if(action_type == 'submit'){
				wpjam_page_setting.submit_button	= document.activeElement

				if($(wpjam_page_setting.submit_button).next('.spinner').length == 0){
					$(wpjam_page_setting.submit_button).after('<span class="spinner"></span>');
				}

				$(wpjam_page_setting.submit_button).prop('disabled', true).next('.spinner').addClass('is-active');
			}else{
				$('body').append("<div id='TB_load'><img src='"+imgLoader.src+"' width='208' /></div>");
				$('#TB_load').show();

				if(args && args.action	== 'wpjam-list-table-action'){
					let ids	= args.bulk ? args.ids : [args.id];
					
					$.each(ids, function(index, id){
						$($.wpjam_list_table_tr_item(id) + ' .check-column input').after('<span class="spinner is-active"></span>').hide();
					});
				}
			}
		},

		wpjam_loaded: function(action_type, args){
			if(action_type == 'submit'){
				if(wpjam_page_setting.submit_button){
					$(wpjam_page_setting.submit_button).prop('disabled', false).next('.spinner').remove();
				}
			}else{
				$('#TB_load').remove();

				if(args && args.action	== 'wpjam-list-table-action'){
					let ids	= args.bulk ? args.ids : [args.id];
					
					$.each(ids, function(index, id){
						let tr_item	= $.wpjam_list_table_tr_item(id);

						$(tr_item+' .check-column input').show();
						$(tr_item+' .check-column .spinner').remove();
					});
				}
			}
		},

		wpjam_list_table_action: function(args){
			let list_action	= args.list_action;
			let action_type	= args.list_action_type;
			let action_data	= args.data;

			args	= $.wpjam_append_page_setting(args);

			args.action	= 'wpjam-list-table-action';

			$.wpjam_loading(action_type, args);

			$.post(ajaxurl, args, function(data, status){
				let response	= (typeof data == 'object') ? data : JSON.parse(data);
				let tr_item		= $.wpjam_list_table_tr_item(args.id);

				$('.wp-list-table > tbody tr').not(tr_item).css('background-color', '');

				$.wpjam_loaded(action_type, args);

				if(response.errcode != 0){
					if(action_type == 'submit'){
						$('#TB_ajaxContent').scrollTop(0);
					}

					$.wpjam_notice(response.errmsg, 'error');
				}else{
					if(action_type == 'list' || action_type == 'left'){
						if(action_type == 'left'){
							$('div#col-left div').html(response.left);
						}

						$('div.list-table').html(response.data);
						$('html').scrollTop(0);

						$('body').trigger('list_table_loaded');
					}else if(action_type == 'form'){
						if($('#TB_ajaxContent').length > 0){
							$('#TB_ajaxWindowTitle').html(response.page_title);
							$('#TB_ajaxContent').html(response.form);
						}else{
							$('#tb_modal').html(response.form);
							$.wpjam_show_modal('tb_modal', response.page_title, response.width);
						}
					}else{
						$.wpjam_list_table_response(response, args);
					}

					$.wpjam_push_state();

					response.list_action		= list_action;
					response.list_action_type	= action_type;

					$('body').trigger('list_table_action_success', response);
				}
			});

			return false;
		},

		wpjam_list_table_response: function(response, args){
			if(response.type == 'items' && response.items){
				$.each(response.items, function(i, item){
					$.wpjam_list_table_response(item, args);
				});
			}else if(response.type == 'redirect'){
				$.wpjam_response_redirect(response);
			}else if(response.type == 'append'){
				if($('#TB_ajaxContent').length > 0){
					$.wpjam_response_append(response);
				}else{
					$('#tb_modal').html(response.data);
					$.wpjam_show_modal('tb_modal', response.page_title, response.width);
				}
			}else{
				if($('#TB_ajaxContent').length > 0){
					if(response.dismiss){
						tb_remove();
					}else{
						$('#TB_ajaxWindowTitle').html(response.page_title);
						$('#TB_ajaxContent').html(response.form);
						$('#TB_ajaxContent').scrollTop(0);
					}

					if(response.errmsg){
						$.wpjam_notice(response.errmsg, 'success');
					}
				}

				let tr_item	= $.wpjam_list_table_tr_item(args.id);

				if(response.type == 'form'){
					//
				}else if(response.type == 'list'){
					$('div.list-table').html(response.data);
				}else if(response.type == 'add' || response.type == 'duplicate'){
					$.wpjam_list_table_create_item(response, '#ffffee');
				}else if(response.type == 'delete'){
					$.wpjam_list_table_delete_item(response);
				}else if(response.type == 'up' || response.type == 'down'){
					if(response.type == 'up'){
						let tr_next	= $.wpjam_list_table_tr_item(args.next);
						$(tr_next).insertAfter(tr_item);
					}else{
						let tr_prev	= $.wpjam_list_table_tr_item(args.prev);
						$(tr_item).insertAfter(tr_prev);
					}

					$.wpjam_list_table_update_item(response, '#eeffff');
				}else if(response.type == 'move'){
					$('.wp-list-table > tbody').sortable('enable');
					$.wpjam_list_table_update_item(response, '#eeffee');
				}else if(response.type == 'move_item'){
					$('.wp-list-table > tbody .items.sortable').sortable('enable');

					$.wpjam_list_table_update_item(response, false);

					$(tr_item+' #item-'+args.pos).css('background-color', '#eeffee');
				}else if(response.type == 'add_item'){
					$.wpjam_list_table_update_item(response, false);

					$(tr_item+' .items .item').last().css('background-color', '#ffffee');
				}else if(response.type == 'edit_item'){
					$.wpjam_list_table_update_item(response, false);

					let	sp	= new URLSearchParams(args.defaults);

					$(tr_item+' #item-'+sp.get('i')).css('background-color', '#ffffee');
				}else if(response.type == 'del_item'){
					let	sp	= new URLSearchParams(args.data);

					$(tr_item+' #item-'+sp.get('i')).css('background-color', 'red').fadeOut(400, function(){ $(this).remove();});;
				}else{
					$.wpjam_list_table_update_item(response, '#ffffee');
				}

				if(response.next){
					wpjam_page_setting.params.list_action	= response.next;
					
					if(response.next != 'add' && response.id){
						wpjam_page_setting.params.id	= response.id;
					}

					if(args.data && response.type == 'form'){
						wpjam_page_setting.params.data	= args.data;
					}
				}
			}
		},

		wpjam_list_table_create_item: function(response, bg_color){
			if(response.data){
				if(response.layout == 'calendar'){
					$.wpjam_list_table_update_calendar_date(response, bg_color);
				}else{
					if(response.bulk){
						$.each(response.data, function(id, item){
							bg_color 	= bg_color == '#ffffdd' ? '#ffffee' : '#ffffdd';
							$.wpjam_list_table_create_item({id: id, data: item, bulk: false}, bg_color);
						});
					}else{
						if(response.after){
							$($.wpjam_list_table_tr_item(response.after)).after(response.data);
						}else if(response.before){
							$($.wpjam_list_table_tr_item(response.before)).before(response.data);
						}else if(response.last){
							$('.wp-list-table > tbody tr').last().after(response.data);
						}else{
							$('.wp-list-table > tbody tr').first().before(response.data);
						}

						let tr_item	= $.wpjam_list_table_tr_item(response.id);

						$(tr_item).hide().css('background-color', bg_color).fadeIn(400);

						let offset = $(tr_item).offset().top - $(window).scrollTop();

						if(offset > $(window).height()){
							$('html, body').animate({scrollTop: offset}, 400);
						}
					}	

					$('.no-items').remove();
				}
			}
		},

		wpjam_list_table_update_item: function(response, bg_color){
			if(response.layout == 'calendar'){
				$.wpjam_list_table_update_calendar_date(response, bg_color);
			}else{
				if(response.bulk){
					$.each(response.data, function(id, item){
						bg_color 	= bg_color == '#ffffdd' ? '#ffffee' : '#ffffdd';
						$.wpjam_list_table_update_item({id: id, data: item, bulk: false}, bg_color);
					});
				}else{
					if(response.id){
						let tr_item	= $.wpjam_list_table_tr_item(response.id);

						if(response.data){
							let tr_id	= $.wpjam_list_table_tr_id(response.id);

							$(tr_item).last().after('<span class="edit-'+tr_id+'"></span>');
							$(tr_item).remove();
							$('.edit-'+tr_id).before(response.data).remove();

							if(bg_color){
								$(tr_item).hide().css('background-color', bg_color).fadeIn(1000);
							}
						}else{
							if(bg_color){
								$(tr_item).hide().css('background-color', bg_color).fadeIn(400);	
							}
							
						}
					}
				}
			}
		},

		wpjam_list_table_update_calendar_date(response, bg_color){
			$.each(response.data, function(date, item){
				bg_color 	= bg_color == '#ffffdd' ? '#ffffee' : '#ffffdd';
				$('td#date_'+date).html(item).css('background-color', bg_color);
			});
		},

		wpjam_list_table_delete_item: function(response){
			if(response.layout == 'calendar'){
				$.wpjam_list_table_update_calendar_date(response, '#ffffee');
			}else{
				if(response.bulk){
					$.each(response.ids, function(index, id){
						$.wpjam_list_table_delete_item({id: id, bulk: false});
					});
				}else{
					let tr_item	= $.wpjam_list_table_tr_item(response.id);
					$(tr_item).css('background-color', 'red').fadeOut(400, function(){ $(this).remove();});
				}
			}
		},

		wpjam_list_table_tr_id: function(id){
			return typeof(id) == "string" ? id.replace(/\./g, '-') : id;
		},

		wpjam_list_table_tr_item: function(id){
			let prefix	= 'post';

			if(wpjam_page_setting.screen_base != 'edit'){
				prefix = $('#the-list').data('wp-lists').split(':')[1];
			}

			return '#'+prefix+'-'+$.wpjam_list_table_tr_id(id)
		},

		wpjam_list_table_left_action:function(){
			if($('#wpjam_left_keys').length > 0){
				let left_keys	= JSON.parse($('#wpjam_left_keys').val());

				$.each(left_keys, function(index, left_key){
					delete wpjam_page_setting.params[left_key];
				});
			}

			return $.wpjam_list_table_action({list_action_type: 'left', data: $.param(wpjam_page_setting.params)});
		},

		wpjam_list_table_query_items: function(){
			return $.wpjam_list_table_action({list_action_type: 'list', data: $.param(wpjam_page_setting.params)});
		},

		wpjam_list_table_filter_action: function(params){
			wpjam_page_setting.params	= {};

			$.each(params, function(index, param){
				if($.inArray(param.name, ['page', 'tab', 's', 'paged', '_wp_http_referer', '_wpnonce', 'action', 'action2']) == -1){
					wpjam_page_setting.params[param.name]	= param.value;
				}
			});

			return $.wpjam_list_table_query_items();
		},

		wpjam_list_table_sortable: function(items){
			items	= items || ' > tr';

			$('.wp-list-table > tbody').sortable({
				items:		items,
				axis:		'y',
				containment:'.wp-list-table',
				cursor:		'move',
				handle:		'.list-table-move-action',

				create: function(e, ui){
					$('.wp-list-table > tbody '+items).addClass('ui-sortable-item');
				},

				start: function(e, ui){
					ui.placeholder.css({
						'visibility':'visible',
						'background-color':'#eeffff',
						'width':ui.item.width()+'px', 
						'height':ui.item.height()+'px'
					});
				},

				helper: function(e, ui){
					let children = ui.children();

					for(let i=0; i<children.length; i++){
						$(children[i]).width($(children[i]).width());
					};

					return ui;
				},

				update:	function(e, ui) {
					$(this).sortable('disable');

					let handle	= ui.item.find('.row-actions .move a');
					let	next	= ui.item.next().find('.ui-sortable-handle').data('id');
					let	prev	= ui.item.prev().find('.ui-sortable-handle').data('id');
					let data	= handle.data('data');

					data	= data ? data + '&type=drag' : 'type=drag';
					data	= next ? data + '&next='+next : data;
					data	= prev ? data + '&prev='+prev : data;

					ui.item.css('background-color', '#eeffee');

					$.wpjam_list_table_action({
						list_action_type:	'direct',
						list_action:		'move',
						data:				data,
						id:					handle.data('id'),
						_ajax_nonce: 		handle.data('nonce')
					});
				}
			});
		},

		wpjam_list_table_item_sortable: function(){
			if($('.wp-list-table > tbody .items.sortable').length <= 0){
				return;
			}

			$('.wp-list-table > tbody .items.sortable').sortable({
				items:	'> div.item',
				cursor:	'move',
				handle:	'.move-item',

				create: function(e, ui){
					$(this).sortable('option', 'containment', $(this).parent());
				},

				start: function(e, ui){
					ui.placeholder.css({
						'visibility':'visible',
						'background-color':'#eeffff', 
						'width':ui.item.width()+'px', 
						'height':ui.item.height()+'px'
					});
				},

				helper: function(e, ui){
					let children = ui.children();

					for(let i=0; i<children.length; i++){
						$(children[i]).width($(children[i]).width()).height($(children[i]).height());
					};

					return ui;
				},
				
				update:	function(e, ui) {
					$(this).sortable('disable');

					let handle	= ui.item.find('.move-item');
					let args	= {
						list_action_type:	'direct',
						list_action:		'move_item',
						data:				handle.data('data'),
						id:					handle.data('id'),
						_ajax_nonce: 		handle.data('nonce')
					};

					args.data	= args.data ? args.data + '&type=drag' : 'type=drag';
					args.data	= args.data + '&'+$(this).sortable('serialize');

					if(ui.item.next().length){
						let next	= ui.item.next().data('i');
						args.data	= args.data + '&next=' + next;

						if(ui.item.data('i') >= next){
							args.pos	= next;	
						}
					}

					if(ui.item.prev().length){
						let prev	= ui.item.prev().data('i');
						args.data	= args.data + '&prev=' + prev;
						
						if(ui.item.data('i') <= prev){
							args.pos	= prev;	
						}
					}

					ui.item.css('background-color', '#eeffee');
					
					$.wpjam_list_table_action(args);
				}
			});
		},

		wpjam_list_table_pagination:function(paged){
			$('#current-page-selector').val(paged);
			wpjam_page_setting.params.paged	= paged;

			return $.wpjam_list_table_query_items();
		},

		wpjam_list_table_bulk_action: function(active_element_id){
			let action_selector_id = '';

			if(active_element_id == 'doaction'){
				action_selector_id	= '#bulk-action-selector-top';
			}else if(active_element_id == 'doaction2'){
				action_selector_id	= '#bulk-action-selector-bottom';
			}else{
				return false;
			}

			let bulk_action	= $('select'+action_selector_id).val();
			let bulk_option	= $('select'+action_selector_id).find('option:selected');

			if(bulk_action == '-1'){
				alert('请选择要进行的批量操作！');
				return false;
			}

			let ids	= [];

			$('tbody .check-column input[type="checkbox"]:checked').each(function(index, element){
				ids.push($(this).val());
			});

			if(ids.length == 0){
				alert('请至少选择一项！');
				return false;
			}

			if(bulk_option.data('action')){
				if(bulk_option.data('confirm')){
					if(confirm('确定要'+bulk_option.text()+'吗?') == false){
						return false;
					}
				}

				$.wpjam_list_table_action({
					bulk:				true,
					ids:				ids,
					list_action_type:	bulk_option.data('direct') ? 'direct' : 'form',
					list_action:		bulk_action,
					data:				bulk_option.data('data'),
					_ajax_nonce: 		bulk_option.data('nonce')
				});
			}

			return false;
		},

		wpjam_response_append: function(response){
			let wrap	= ($('#TB_ajaxContent').length > 0) ? '#TB_ajaxContent' : 'div.wrap';

			if($(wrap+' .response').length == 0){
				$(wrap).append('<div class="card response hidden"></div>');
			}

			$(wrap+' .response').html(response.data).fadeIn(400);

			if($('#TB_ajaxContent').length > 0){
				$('#TB_ajaxContent').scrollTop($('#TB_ajaxContent form').prop('scrollHeight'));
			}
		},

		wpjam_response_redirect: function(response){
			if(response.url){
				window.location.href	= response.url;
			}else{
				window.location.reload();
			}
		},

		wpjam_page_action: function (args){
			let action_type	= args.page_action_type || 'form';
			let page_action	= args.page_action;
			let action_data	= args.data;

			args	= $.wpjam_append_page_setting(args);

			args.action	= 'wpjam-page-action';

			$.wpjam_loading(action_type);

			$.post(ajaxurl, args, function(data, status){
				let response	= (typeof data == 'object') ? data : JSON.parse(data);

				$.wpjam_loaded(action_type);

				if(response.errcode != 0){
					if(action_type == 'submit'){
						$.wpjam_notice(args.page_title+'失败：'+response.errmsg, 'error');
					}else{
						alert(response.errmsg);
					}
				}else{
					if(action_type == 'submit'){
						if(response.type == 'append'){
							$.wpjam_response_append(response);
						}else if(response.type == 'redirect'){
							$.wpjam_response_redirect(response);
						}else{
							if($('#wpjam_form').length > 0){
								if(response.form){
									$('#wpjam_form').html(response.form);
								}
							}

							if(response.errmsg){
								$.wpjam_notice(response.errmsg, 'info');
							}else{
								$.wpjam_notice(args.page_title+'成功', 'success');
							}

							if($('#TB_ajaxContent').length > 0){
								$('#TB_ajaxContent').scrollTop(0);
							}else if($('.wp-heading-inline').offset().top < $(window).scrollTop()){
								$('html, body').animate({scrollTop: 0}, 800);
							}
						}

						if(response.done == 0){
							setTimeout(function(){
								args.data	= response.args;
								$.wpjam_page_action(args);
							}, 400);
						}
					}else if(action_type == 'form'){
						if(response.form){
							$('#tb_modal').html(response.form);
						}else if(response.data){
							$('#tb_modal').html(response.data);
						}else{
							alert('服务端未返回表单数据');
						}

						$.wpjam_show_modal('tb_modal', response.page_title, response.width);
					}else{
						if(response.type == 'redirect'){
							$.wpjam_response_redirect(response);
						}else{
							if(response.errmsg){
								$.wpjam_notice(response.errmsg, 'success');
							}
						}
					}

					$.wpjam_push_state();

					response.page_action		= page_action;
					response.page_action_type	= action_type;

					$('body').trigger('page_action_success', response);
				}
			});

			return false;
		},

		wpjam_option_action: function(args){
			let action_data	= args.data;
			let submit_btn	= document.activeElement;

			args	= $.wpjam_append_page_setting(args);

			args.action	= 'wpjam-option-action';

			$.wpjam_loading('submit');

			$.post(ajaxurl, args, function(data, status){
				let response	= (typeof data == 'object') ? data : JSON.parse(data);
				let notice_msg	= '';

				$.wpjam_loaded('submit');

				if(response.errcode != 0){
					notice_msg	= args.option_action == 'reset' ? '重置' : '保存';

					$.wpjam_notice(notice_msg+'失败：'+response.errmsg, 'error');
				}else{
					notice_msg	= response.errmsg || (args.option_action == 'reset' ? '设置已重置。' : '设置已保存。');

					$.wpjam_notice(notice_msg, 'success');

					$('body').trigger('option_action_success', response);

					if(args.option_action == 'reset'){
						window.location.reload();
					}else{
						if($('.wp-heading-inline').offset().top < $(window).scrollTop()){
							$('html, body').animate({scrollTop: 0}, 800);
						}
					}
				}
			});

			return false;
		},

		wpjam_append_page_setting(args){
			args.screen_id	= wpjam_page_setting.screen_id;

			if(!$.isEmptyObject(wpjam_page_setting.query_data)){
				if(args.data && typeof(args.data) != 'undefined'){
					$.each(args.data.split('&'), function(){
						let query = this.split('=');

						if(wpjam_page_setting.query_data.hasOwnProperty(query[0])){
							wpjam_page_setting.query_data[query[0]]	= query[1];
						}
					});

					args.data	= $.param(wpjam_page_setting.query_data)+'&'+args.data;
				}else{
					args.data	= $.param(wpjam_page_setting.query_data);
				}
			}

			if(wpjam_page_setting.plugin_page){
				args.plugin_page	= wpjam_page_setting.plugin_page;
				args.current_tab	= wpjam_page_setting.current_tab;
			}

			if(wpjam_page_setting.post_type){
				args.post_type	= wpjam_page_setting.post_type;
			}

			if(wpjam_page_setting.taxonomy){
				args.taxonomy	= wpjam_page_setting.taxonomy;
			}

			return args;
		},

		wpjam_push_state(){
			let admin_url	= $('#adminmenu a.current').prop('href');
			let query		= $.extend({}, wpjam_page_setting.params);

			if(wpjam_page_setting.current_tab){
				query	= $.extend({}, {tab: wpjam_page_setting.current_tab}, query);
			}

			if(query.data){
				query.data	= encodeURIComponent(query.data);
			}

			query	= $.param(query);

			if(query){
				admin_url	+= admin_url.indexOf('?') >= 0 ? '&' : '?';
				admin_url	+= decodeURIComponent(query);
			}
			
			if(window.location.href != admin_url){
				window.history.pushState(wpjam_page_setting.params, null, admin_url);
			}
		}
	});

	let old_send_to_editor	= window.send_to_editor;
	window.send_to_editor = function(html){
		let old_tb_remove	= window.tb_remove;
		window.tb_remove	= null;
		old_send_to_editor.apply(this, arguments);
		window.tb_remove	= old_tb_remove;
	};

	window.tb_position	= function(){
		if($('#TB_window').length){
			$('#TB_window').addClass('abscenter');

			if($('#TB_ajaxContent').length || $('#TB_iframeContent').length){
				let W	= Math.min(TB_WIDTH, 720, $(window).width()-20);
				let H	= Math.min(900, $(window).height()-120);

				if($('#TB_ajaxContent').length){
					$('#TB_ajaxContent').css({width: W-50, height: '', maxHeight: H});
				}

				$('#TB_window').css({width : W});
			}

			$('#TB_overlay').off('click');
		}
	};

	$(window).resize(function(){
		tb_position();
	});

	$('body').on('click', '.show-modal', function(){
		$.wpjam_show_modal($(this).data('modal_id'));
	});

	if($('#notice_modal').length){
		$.wpjam_show_modal('notice_modal');
	}

	$('body').on('tb_unload', '#TB_window', function(){
		if($('#notice_modal').find('.delete-notice').length){
			$('#notice_modal').find('.delete-notice').trigger('click');
		}

		if(wpjam_page_setting.params.list_action){
			delete wpjam_page_setting.params.list_action;
			delete wpjam_page_setting.params.id;
			delete wpjam_page_setting.params.data;

			$.wpjam_push_state();
		}else if(wpjam_page_setting.params.page_action){
			delete wpjam_page_setting.params.page_action;
			delete wpjam_page_setting.params.data;

			$.wpjam_push_state();
		}
	});

	$('body').on('click', '.is-dismissible .notice-dismiss', function(){
		if($(this).prev('.delete-notice').length){
			$(this).prev('.delete-notice').trigger('click');
		}
	});

	window.onpopstate = function(event){
		wpjam_page_setting.params	= event.state ? event.state : {};

		if(wpjam_page_setting.params.list_action){
			$.wpjam_list_table_action($.extend({}, wpjam_page_setting.params, {list_action_type: 'form'}));
		}else if(wpjam_page_setting.params.page_action){
			$.wpjam_page_action($.extend({}, wpjam_page_setting.params, {page_action_type: 'form'}));
		}else{
			tb_remove();

			if(wpjam_page_setting.list_table){
				$.wpjam_list_table_query_items();
			}
		}
	};

	$('body').on('list_table_loaded', function(e){
		if($(window).width() > 782){
			let bulkactions	= $('.tablenav.top').find('div.bulkactions');

			if(bulkactions.length == 1 && bulkactions.html().replace(/[\n\t]/g, '') == ''){
				bulkactions.remove();
			}

			if($('p.search-box').length){
				if($('ul.subsubsub').length){
					$('ul.subsubsub').css('max-width', 'calc(100% - 240px)')
				}
			}else{
				if($('.tablenav.top').find('div.alignleft').length == 0){
					$('.tablenav.top').css({clear:'none'});
				}
			}	
		}

		if(wpjam_page_setting.list_table && wpjam_page_setting.list_table.sortable){
			$.wpjam_list_table_sortable(wpjam_page_setting.list_table.sortable.items);
		}

		$.wpjam_list_table_item_sortable();
	});

	$('body').on('list_table_action_success', function(e, response){
		if(response.list_action_type != 'form' && response.list_action_type != 'list'){
			$.wpjam_list_table_item_sortable();
		}
	});

	if(wpjam_page_setting.list_table){
		if(wpjam_page_setting.list_table.query_id){
			$.wpjam_list_table_update_item({id:wpjam_page_setting.list_table.query_id}, '#ffffee');
		}

		$('body').trigger('list_table_loaded');
	}

	window.history.replaceState(wpjam_page_setting.params, null);

	if(wpjam_page_setting.params.page_action){
		$.wpjam_page_action($.extend({}, wpjam_page_setting.params, {page_action_type: 'form'}));
	}else if(wpjam_page_setting.params.list_action){
		$.wpjam_list_table_action($.extend({}, wpjam_page_setting.params, {list_action_type: 'form'}));
	}

	$('body').on('submit', '#list_table_action_form', function(e){
		e.preventDefault();

		let args	= {
			list_action_type :	'submit',
			bulk : 				$(this).data('bulk'),
			list_action :		$(this).data('action'),
			ids :				$(this).data('ids'),
			id :				$(this).data('id'),
			data : 				$(this).serialize(),
			defaults :			$(this).data('data'),
			_ajax_nonce :		$(this).data('nonce')
		};

		if($(this).data('next')){
			wpjam_page_setting.action_flows = wpjam_page_setting.action_flows || [];
			wpjam_page_setting.action_flows.push(args.list_action);
		}

		return $.wpjam_list_table_action(args);
	});

	$('body').on('click', '.list-table-action', function(){
		if($(this).data('confirm')){
			if(confirm('确定要'+$(this).attr('title')+'吗?') == false){
				return false;
			}
		}

		let args	= {
			list_action_type :	$(this).data('direct') ? 'direct' : 'form',
			list_action :		$(this).data('action'),
			id : 				$(this).data('id'),
			data : 				$(this).data('data'),
			_ajax_nonce :		$(this).data('nonce')
		};

		let tr_item	= $.wpjam_list_table_tr_item(args.id);

		if(args.list_action == 'up'){
			if($(tr_item).prev().length <= 0){
				alert('已经是第一个了，不可上移了。');
				return false;
			}

			args.next	= $(tr_item).prev().find('.ui-sortable-handle').data('id');
			args.data	= args.data ? args.data + '&next='+args.next : 'next='+args.next;
		}else if(args.list_action == 'down'){
			if($(tr_item).next().length <= 0){
				alert('已经最后一个了，不可下移了。');
				return false;
			}

			args.prev	= $(tr_item).next().find('.ui-sortable-handle').data('id');
			args.data	= args.data ? args.data + '&prev='+args.prev : 'prev='+args.prev;
		}else if(args.list_action_type == 'form'){
			wpjam_page_setting.params.list_action	= args.list_action;

			if(args.list_action != 'add' && args.id){
				wpjam_page_setting.params.id	= args.id;
			}

			if(args.data){
				wpjam_page_setting.params.data	= args.data;
			}
		}

		$.wpjam_list_table_action(args);

		$(this).blur();
	});

	// From mdn: On Mac, elements that aren't text input elements tend not to get focus assigned to them.
	$('body').on('click', 'input[type=submit]', function(e){
		$(this).focus();
	});

	$('body').on('submit', '#list_table_form', function(e){
		let active_element_id	= $(document.activeElement).attr('id');

		if(active_element_id == 'current-page-selector'){
			return $.wpjam_list_table_pagination($('#current-page-selector').val());
		}else if(active_element_id == 'doaction' || active_element_id == 'doaction2'){
			return $.wpjam_list_table_bulk_action(active_element_id);
		}else if(active_element_id == 'search-submit' || active_element_id == 'wpjam-search-input'){
			wpjam_page_setting.params	= {s:$('#wpjam-search-input').val()};

			return $.wpjam_list_table_query_items();
		}else if(active_element_id == 'filter_action'){
			return $.wpjam_list_table_filter_action($(this).serializeArray());
		}else if(active_element_id == 'export_action'){
			return;
		}
	});

	$('body').on('submit', '#posts-filter', function(e){
		let active_element_id	= $(document.activeElement).attr('id');

		if(active_element_id == 'doaction' || active_element_id == 'doaction2'){
			return $.wpjam_list_table_bulk_action(active_element_id);
		}
	});

	$('body').on('click', '#list_table_form th.sorted, #list_table_form th.sortable', function(){
		wpjam_page_setting.params.orderby	= $(this).attr('id');
		wpjam_page_setting.params.order		= $(this).hasClass('asc') ? 'desc' : 'asc';
		wpjam_page_setting.params.paged		= 1;

		return $.wpjam_list_table_query_items();
	});

	$('body').on('click', '.list-table-filter', function(){
		return $.wpjam_list_table_filter_action($(this).data('filter'));
	});

	$('body').on('click', '#list_table_form .pagination-links a', function(){
		let href = new URL($(this).prop('href'));

		return $.wpjam_list_table_pagination(href.searchParams.get('paged'));
	});

	$('body').on('click', '#col-left .pagination-links a', function(){
		wpjam_page_setting.params.left_paged	= $(this).data('left_paged');

		return $.wpjam_list_table_left_action();
	});

	$('body').on('click', '#col-left .left-pagination', function(){
		wpjam_page_setting.params.left_paged	= parseInt($(this).parent().prev('input').val());

		return $.wpjam_list_table_left_action();
	});

	$('body').on('click', '.wpjam-button', function(e){
		e.preventDefault();

		if($(this).data('confirm')){
			if(confirm('确定要'+$(this).data('title')+'吗?') == false){
				return false;
			}
		}

		let args	= {
			page_action_type:	$(this).data('direct') ? 'direct' : 'form',
			data:				$(this).data('data'),
			form_data:			$(this).parents('form').serialize(),
			page_action:		$(this).data('action'),
			page_title:			$(this).data('title'),
			_ajax_nonce:		$(this).data('nonce')
		};

		if(args.page_action_type == 'form'){
			wpjam_page_setting.params.page_action	= args.page_action;

			if(args.data){
				wpjam_page_setting.params.data	= args.data;
			}
		}

		return $.wpjam_page_action(args);
	});

	$('body').on('submit', '#wpjam_form', function(e){
		e.preventDefault();

		return $.wpjam_page_action({
			page_action_type:	'submit',
			data: 				$(this).serialize(),
			page_action:		$(this).data('action'),
			page_title:			$(this).data('title'),
			_ajax_nonce:		$(this).data('nonce')
		});
	});

	$('body').on('submit', '#wpjam_option', function(e){
		e.preventDefault();

		let option_action	= $(document.activeElement).data('action');

		if(option_action == 'reset'){
			if(confirm('确定要重置吗?') == false){
				return false;
			}
		}

		$.wpjam_option_action({
			option_action:	option_action,
			data:			$(this).serialize()
		});
	});

	if(wpjam_page_setting.screen_base == 'edit'){
		var wp_inline_edit_function = inlineEditPost.edit;

		inlineEditPost.edit = function(id){

			wp_inline_edit_function.apply(this, arguments);

			if(typeof(id) === 'object'){
				id = this.getId(id);
			}

			if(id > 0){
				var edit_row	= $('#edit-' + id);

				if($('#inline_'+id+' div.post_excerpt').length){
					var excerpt		= $('#inline_'+id+' div.post_excerpt').text();
					$(':input[name="the_excerpt"]', edit_row).val(excerpt);
				}
			}
		}
	}
});