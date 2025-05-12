import { Component } from '@angular/core';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { WelcomeMsgComponent } from '../../components/welcome-msg/welcome-msg.component';

@Component({
  selector: 'app-home',
  imports: [SidebarComponent, WelcomeMsgComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
