export class LoginAlgorithm {
  // funcion para encriptar los datos de session
  enCrypt(textDecrypt : string | null) : string  {
    let encryptText = ''
    try {
      if (textDecrypt === null){
        textDecrypt = '' // en caso de que sea nulo colocamos un string vacio
      }else{
        for (let i = 0; i < textDecrypt.length; i++) {
        encryptText += String.fromCharCode((textDecrypt.charCodeAt(i)*2));
        } 
      }
    } catch (error) {
      console.log(error);      
    }
    return encryptText;
  }

  // funcion para desencriptar los datos de session
  deCrypt(encryptText : string  | null) : string{
    let decryptText = ''
    try{
      if (encryptText === null){
        encryptText = ""
      } else{

        for (let i = 0; i < encryptText.length; i++) {
          decryptText += String.fromCharCode(encryptText.charCodeAt(i)/2);    
        }
      }
    } catch (error) {
      console.log(error);
    }
    return decryptText;
  }
}