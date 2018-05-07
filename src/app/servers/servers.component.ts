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
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2'];
  constructor() {
    setTimeout(() =>{
      this.allowNewServer = true;
    },2000);
  } 

  ngOnInit() {
  }
  onCreateServer(){
    this.serverCreated = true;
    this.serverCreationStatus='Server was created, and name is ' + this.serverName;
    this.servers.push(this.serverName);
  }
  onUpdateServerName(event:Event){
    this.serverName=(<HTMLInputElement>event.target).value;
  }
  
}
