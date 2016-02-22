(function(){
  var sideBarButton = document.getElementById('sideBarButton'),
      sideBar = document.getElementById('sideBar'),
      sideBarContent = document.getElementById('sideBarContent'),
      sideBarButtonClicked = true;


      /*SideBarButton Handling*/
      sideBarButton.onclick = function(){
        if(sideBarButtonClicked === true)
        {
          sideBar.style.width = "200%";
          sideBarButtonClicked = false;
        }else if(sideBarButtonClicked === false)
        {
          sideBar.style.width = "0px";
          sideBarButtonClicked = true;
        }

      };



})();
