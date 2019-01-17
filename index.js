/* Requirements:
- enter items they need to purchase by entering text and hitting "Return" or clicking the "Add item" button
- check and uncheck items on the list by clicking the "Check" button
- permanently remove items from the list */

$(function(){
    $('#js-shopping-list-form').submit(function(event) {
        event.preventDefault();
        let newItem = $('#shopping-list-entry').val();
        $('#shopping-list-entry').val('');
        $('.shopping-list').append(
            `<li>
                 <span class="shopping-item">${newItem}</span>
                 <div class="shopping-item-controls">
                    <button class="shopping-item-toggle">
                     <span class="button-label">check</span>
                 </button>
                 <button class="shopping-item-delete">
                    <span class="button-label">delete</span>
                </button>
                </div>
             </li>`);
    });
      
   $(document).on('click', '.shopping-item-toggle', function(){
        $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    });
  

    $(document).on('click', '.shopping-item-delete', function(){
        $(this).closest('li').remove();
    });
})

