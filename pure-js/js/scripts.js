function carousel (){
    this.imageNumber = 0;
    this.image_list = [];
    this.prev_button = this.render("Prev", "prev_button", "prev_button_class","image_container");
    this.next_button = this.render("Next", "next_button", "next_button_class","image_container")
    this.image_container = this.render("", "image_container", "image_container_class","root")
    this.image_slider = this.render("", "image_slider", "image_slider_class","image_container")
    // UI
        //Image container
        //Prev next button
        //Image wrapper


    //Setting
        // 1. Photolist: array
        // 2. Circular: true
        // 3. Number show
        // 4. Bullet show

}

carousel.prototype.init = function() {

}



carousel.prototype.renderDiv = function(text, id, class, parent_id) {
    var newDiv = document.createElement("div");
    var newContent = document.createTextNode(text);
    newDiv.appendChild(newContent);
    newDiv.id = id;
    var currentDiv = document.getElementById(parent_id);
    document.body.insertBefore(newDiv, currentDiv);
    return newDiv;
}

carousel.prototype.renderButton = function(text, id, class, parent_id) {
    var newButton = document.createElement("button");
    var newContent = document.createTextNode(text);
    newButton.appendChild(newContent);
    newButton.id = id;
    var currentDiv = document.getElementById(parent_id);
    document.body.insertBefore(newButton, currentDiv);    
    return newButton;
}




