
const gunBurc = Number(prompt("Doğum gününüzü girin:"));
const ay = prompt("Doğum ayınızı gün olarak giriniz (küçük harflerle !!):");


  if ((ay === "mart" && gunBurc >= 21) || (ay === "nisan" && gunBurc <= 19)) {
    console.log ("Koç Burcu");
  } else if ((ay === "nisan" && gunBurc >= 20) || (ay === "mayıs" && gunBurc <= 20)) {
    console.log ("Boğa Burcu");
  } else if ((ay === "mayıs" && gunBurc >= 21) || (ay === "haziran" && gunBurc <= 20)) {
    console.log ("İkizler Burcu");
  } else if ((ay === "haziran" && gunBurc >= 21) || (ay === "temmuz" && gunBurc <= 22)) {
    console.log ("Yengeç Burcu");
  } else if ((ay === "temmuz" && gunBurc >= 23) || (ay === "ağustos" && gunBurc <= 22)) {
    console.log ("Aslan Burcu");
  } else if ((ay === "ağustos" && gunBurc >= 23) || (ay === "eylül" && gunBurc <= 22)) {
    console.log ("Başak Burcu");
  } else if ((ay === "eylül" && gunBurc >= 23) || (ay === "ekim" && gunBurc <= 22)) {
    console.log ("Terazi Burcu");
  } else if ((ay === "ekim" && gunBurc >= 23) || (ay === "kasım" && gunBurc <= 21)) {
    console.log ("Akrep Burcu");
  } else if ((ay === "kasım" && gunBurc >= 22) || (ay === "aralık" && gunBurc <= 21)) {
    console.log ("Yay Burcu");
  } else if ((ay === "aralık" && gunBurc >= 22) || (ay === "ocak" && gunBurc <= 19)) {
    console.log ("Oğlak Burcu");
  } else if ((ay === "ocak" && gunBurc >= 20) || (ay === "şubat" && gunBurc <= 18)) {
    console.log ("Kova Burcu");
  } else (ay === "şubat" && gunBurc >= 20) || (ay === "mart" && gunBurc <= 20)
  {
          
    console.log ("Balık Burcu");
  }

