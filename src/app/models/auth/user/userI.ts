export interface UserI{
  id                  : number;
  email               : string;
  username            : string;
  nombres             : string;
  apellido_paterno    : string;
  apellido_materno    : string;
  celular             : string;
  documento_identidad : string;
  kallpa_punto        : string;
  fecha_nac           : Date;
  profile             : string;
  es_validado         : boolean;
	id_rol              : number
}