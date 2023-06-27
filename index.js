
   function showContent(component) {
    var components = document.getElementsByClassName('component');
    var content = document.getElementsByClassName('content');
    
    
    for (var i = 0; i < content.length; i++) {
      content[i].style.display = 'none';
    }

    for (var i = 0; i < components.length; i++) {
      components[i].classList.remove('active');
    }


    document.getElementById(component).style.display = 'block';
    document.getElementById(component + '-link').classList.add('active');
  }