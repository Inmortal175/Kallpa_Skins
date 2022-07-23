import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css','../../../assets/css/bootstrap.min.css',
  '../../../assets/plugins/Drag-And-Drop/dist/imageuploadify.min.css', '../../../assets/plugins/simplebar/css/simplebar.css', 
  '../../../assets/plugins/perfect-scrollbar/css/perfect-scrollbar.css',
   '../../../assets/plugins/metismenu/css/metisMenu.min.css', '../../../assets/css/pace.min.css', 
  '../../../assets/css/app.css','../../../assets/css/icons.css', '../../../assets/css/dark-theme.css', '../../../assets/css/semi-dark.css',
   '../../../assets/css/header-colors.css'] 
})
export class CatalogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
