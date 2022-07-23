export interface Usuarios{
    id                  : number;
    email               : string;
    username            : string;
    nombres             : string;
    apellido_paterno    : string;
    apellido_materno    : string;
    celular             : number;
    documento_identidad : number;
    kallpa_punto        : number
    fecha_nac           : Date;
    profile             : string;
    es_validado         : boolean;
    id_rol              : number;

}

