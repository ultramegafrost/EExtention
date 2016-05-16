xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
if (xhr.readyState == 4) 
{
  if (xhr.responseText) 
  {
    var xmlDoc = xhr.responseText;

    var imgs = xmlDoc.match(/http:\/\/imgsrc.hubblesite.org\/hu\/db\/images\/hs-[0-9]{4}-[0-9]{2}-[a-z]/g);
    var hrefs = xmlDoc.match(/gallery\/wallpaper\/pr[0-9]{4,}[a-z]/g);

    if (imgs.length > 0) 
    {
      var randIdx = Math.floor(Math.random() * imgs.length);

      var imgSize = "-wallpaper_thumb.jpg";

      // Какую картинку показываем?
      if(readProperty("previewBig", "false") == "true")
      {
        imgSize = "-640_wallpaper.jpg";
      }

      showImage("http://hubblesite.org/" + hrefs[randIdx], imgs[randIdx] + imgSize);
    }
  } 
}

xhr.open("GET", "http://hubblesite.org/gallery/wallpaper/", true);
RegisterLang();

lang_en_US = 
{
  lngLanguage: "Language",
  
  ...

  lngExit: "Exit"
}

function RegisterLang()
{
  var ctrl = document.getElementById("language");

  if(ctrl != null)
  {
    ctrl.add(createOption("English", "en_US"));
  }
}