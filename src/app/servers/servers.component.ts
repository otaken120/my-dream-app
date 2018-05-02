import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  //template: `
    //<app-server></app-server>
    //<app-server></app-server>`,
  templateUrl:'./servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus ='No srever was created!';
  serverName='TestServer';
  username = 'TestServer';
  usernameCreationStatus='';
  constructor() {
    setTimeout(() =>{
      this.allowNewServer = true;
    },2000);
  } 

  ngOnInit() {
  }
  onCreateServer(){
    this.serverCreationStatus='Server was created, and name is ' + this.serverName;
  }
  onUpdateServerName(event:Event){
    this.serverName=(<HTMLInputElement>event.target).value;
  }
  
}
