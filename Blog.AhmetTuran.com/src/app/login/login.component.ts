import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from '../blog.services';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';




@Component({
  standalone: true,
  selector: 'app-login',
  imports: [FormsModule],
  providers: [BlogService, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent {
  passwordInputType: string = 'password';
  // ...
  passwordIcon: string = 'data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%20standalone%3D%22no%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3C!--%20License%3A%20Apache.%20Made%20by%20javisperez%3A%20https%3A%2F%2Fgithub.com%2Fjavisperez%2Ftoe-icons%20--%3E%3Csvg%20fill%3D%22%23000000%22%20width%3D%22800px%22%20height%3D%22800px%22%20viewBox%3D%220%200%2064%2064%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xml%3Aspace%3D%22preserve%22%20xmlns%3Aserif%3D%22http%3A%2F%2Fwww.serif.com%2F%22%20style%3D%22fill-rule%3Aevenodd%3Bclip-rule%3Aevenodd%3Bstroke-linejoin%3Around%3Bstroke-miterlimit%3A2%3B%22%3E%3Crect%20id%3D%22Icons%22%20x%3D%22-896%22%20y%3D%22-256%22%20width%3D%221280%22%20height%3D%22800%22%20style%3D%22fill%3Anone%3B%22%2F%3E%3Cg%20id%3D%22Icons1%22%20serif%3Aid%3D%22Icons%22%3E%3Cg%20id%3D%22Strike%22%3E%3C%2Fg%3E%3Cg%20id%3D%22H1%22%3E%3C%2Fg%3E%3Cg%20id%3D%22H2%22%3E%3C%2Fg%3E%3Cg%20id%3D%22H3%22%3E%3C%2Fg%3E%3Cg%20id%3D%22list-ul%22%3E%3C%2Fg%3E%3Cg%20id%3D%22hamburger-1%22%3E%3C%2Fg%3E%3Cg%20id%3D%22hamburger-2%22%3E%3C%2Fg%3E%3Cg%20id%3D%22list-ol%22%3E%3C%2Fg%3E%3Cg%20id%3D%22list-task%22%3E%3C%2Fg%3E%3Cg%20id%3D%22trash%22%3E%3C%2Fg%3E%3Cg%20id%3D%22vertical-menu%22%3E%3C%2Fg%3E%3Cg%20id%3D%22horizontal-menu%22%3E%3C%2Fg%3E%3Cg%20id%3D%22sidebar-2%22%3E%3C%2Fg%3E%3Cg%20id%3D%22Pen%22%3E%3C%2Fg%3E%3Cg%20id%3D%22Pen1%22%20serif%3Aid%3D%22Pen%22%3E%3C%2Fg%3E%3Cg%20id%3D%22clock%22%3E%3C%2Fg%3E%3Cg%20id%3D%22external-link%22%3E%3C%2Fg%3E%3Cg%20id%3D%22hr%22%3E%3C%2Fg%3E%3Cg%20id%3D%22info%22%3E%3C%2Fg%3E%3Cg%20id%3D%22warning%22%3E%3C%2Fg%3E%3Cg%20id%3D%22plus-circle%22%3E%3C%2Fg%3E%3Cg%20id%3D%22minus-circle%22%3E%3C%2Fg%3E%3Cg%20id%3D%22vue%22%3E%3C%2Fg%3E%3Cg%20id%3D%22cog%22%3E%3C%2Fg%3E%3Cg%20id%3D%22logo%22%3E%3C%2Fg%3E%3Cg%20id%3D%22radio-check%22%3E%3C%2Fg%3E%3Cg%20id%3D%22eye-slash%22%3E%3C%2Fg%3E%3Cg%20id%3D%22eye%22%3E%3Cpath%20d%3D%22M32.513%2C13.926c10.574%2C0.15%2019.141%2C9.894%2023.487%2C18.074c0%2C0%20-1.422%2C2.892%20-2.856%2C4.895c-0.694%2C0.969%20-1.424%2C1.913%20-2.191%2C2.826c-0.547%2C0.65%20-1.112%2C1.283%20-1.698%2C1.898c-5.237%2C5.5%20-12.758%2C9.603%20-20.7%2C8.01c-8.823%2C-1.77%20-15.732%2C-9.498%20-20.058%2C-17.629c0%2C0%201.248%2C-2.964%202.69%2C-4.964c0.646%2C-0.897%201.324%2C-1.77%202.034%2C-2.617c0.544%2C-0.649%201.108%2C-1.282%201.691%2C-1.897c4.627%2C-4.876%2010.564%2C-8.63%2017.601%2C-8.596Zm-0.037%2C4c-5.89%2C-0.022%20-10.788%2C3.267%20-14.663%2C7.35c-0.527%2C0.555%20-1.035%2C1.127%20-1.527%2C1.713c-0.647%2C0.772%20-1.265%2C1.569%20-1.854%2C2.386c-0.544%2C0.755%20-1.057%2C1.805%20-1.451%2C2.59c3.773%2C6.468%209.286%2C12.323%2016.361%2C13.742c6.563%2C1.317%2012.688%2C-2.301%2017.016%2C-6.846c0.529%2C-0.555%201.04%2C-1.128%201.534%2C-1.715c0.7%2C-0.833%201.366%2C-1.694%201.999%2C-2.579c0.557%2C-0.778%201.144%2C-1.767%201.588%2C-2.567c-3.943%2C-6.657%20-10.651%2C-13.944%20-19.003%2C-14.074Z%22%2F%3E%3Cpath%20d%3D%22M32.158%2C23.948c4.425%2C0%208.018%2C3.593%208.018%2C8.017c0%2C4.425%20-3.593%2C8.017%20-8.018%2C8.017c-4.424%2C0%20-8.017%2C-3.592%20-8.017%2C-8.017c0%2C-4.424%203.593%2C-8.017%208.017%2C-8.017Zm0%2C4.009c2.213%2C0%204.009%2C1.796%204.009%2C4.008c0%2C2.213%20-1.796%2C4.009%20-4.009%2C4.009c-2.212%2C0%20-4.008%2C-1.796%20-4.008%2C-4.009c0%2C-2.212%201.796%2C-4.008%204.008%2C-4.008Z%22%2F%3E%3C%2Fg%3E%3Cg%20id%3D%22toggle-off%22%3E%3C%2Fg%3E%3Cg%20id%3D%22shredder%22%3E%3C%2Fg%3E%3Cg%20id%3D%22spinner--loading--dots-%22%20serif%3Aid%3D%22spinner%20%5Bloading%2C%20dots%5D%22%3E%3C%2Fg%3E%3Cg%20id%3D%22react%22%3E%3C%2Fg%3E%3Cg%20id%3D%22check-selected%22%3E%3C%2Fg%3E%3Cg%20id%3D%22turn-off%22%3E%3C%2Fg%3E%3Cg%20id%3D%22code-block%22%3E%3C%2Fg%3E%3Cg%20id%3D%22user%22%3E%3C%2Fg%3E%3Cg%20id%3D%22coffee-bean%22%3E%3C%2Fg%3E%3Cg%20id%3D%22coffee-beans%22%3E%3Cg%20id%3D%22coffee-bean1%22%20serif%3Aid%3D%22coffee-bean%22%3E%3C%2Fg%3E%3C%2Fg%3E%3Cg%20id%3D%22coffee-bean-filled%22%3E%3C%2Fg%3E%3Cg%20id%3D%22coffee-beans-filled%22%3E%3Cg%20id%3D%22coffee-bean2%22%20serif%3Aid%3D%22coffee-bean%22%3E%3C%2Fg%3E%3C%2Fg%3E%3Cg%20id%3D%22clipboard%22%3E%3C%2Fg%3E%3Cg%20id%3D%22clipboard-paste%22%3E%3C%2Fg%3E%3Cg%20id%3D%22clipboard-copy%22%3E%3C%2Fg%3E%3Cg%20id%3D%22Layer1%22%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E';
  // ...
  togglePasswordVisibility() {
    if (this.passwordInputType === 'password') {
      this.passwordInputType = 'text';
      this.passwordIcon = 'data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%20standalone%3D%22no%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3C!--%20License%3A%20Apache.%20Made%20by%20javisperez%3A%20https%3A%2F%2Fgithub.com%2Fjavisperez%2Ftoe-icons%20--%3E%3Csvg%20fill%3D%22%23000000%22%20width%3D%22800px%22%20height%3D%22800px%22%20viewBox%3D%220%200%2064%2064%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xml%3Aspace%3D%22preserve%22%20xmlns%3Aserif%3D%22http%3A%2F%2Fwww.serif.com%2F%22%20style%3D%22fill-rule%3Aevenodd%3Bclip-rule%3Aevenodd%3Bstroke-linejoin%3Around%3Bstroke-miterlimit%3A2%3B%22%3E%3Crect%20id%3D%22Icons%22%20x%3D%22-960%22%20y%3D%22-256%22%20width%3D%221280%22%20height%3D%22800%22%20style%3D%22fill%3Anone%3B%22%2F%3E%3Cg%20id%3D%22Icons1%22%20serif%3Aid%3D%22Icons%22%3E%3Cg%20id%3D%22Strike%22%3E%3C%2Fg%3E%3Cg%20id%3D%22H1%22%3E%3C%2Fg%3E%3Cg%20id%3D%22H2%22%3E%3C%2Fg%3E%3Cg%20id%3D%22H3%22%3E%3C%2Fg%3E%3Cg%20id%3D%22list-ul%22%3E%3C%2Fg%3E%3Cg%20id%3D%22hamburger-1%22%3E%3C%2Fg%3E%3Cg%20id%3D%22hamburger-2%22%3E%3C%2Fg%3E%3Cg%20id%3D%22list-ol%22%3E%3C%2Fg%3E%3Cg%20id%3D%22list-task%22%3E%3C%2Fg%3E%3Cg%20id%3D%22trash%22%3E%3C%2Fg%3E%3Cg%20id%3D%22vertical-menu%22%3E%3C%2Fg%3E%3Cg%20id%3D%22horizontal-menu%22%3E%3C%2Fg%3E%3Cg%20id%3D%22sidebar-2%22%3E%3C%2Fg%3E%3Cg%20id%3D%22Pen%22%3E%3C%2Fg%3E%3Cg%20id%3D%22Pen1%22%20serif%3Aid%3D%22Pen%22%3E%3C%2Fg%3E%3Cg%20id%3D%22clock%22%3E%3C%2Fg%3E%3Cg%20id%3D%22external-link%22%3E%3C%2Fg%3E%3Cg%20id%3D%22hr%22%3E%3C%2Fg%3E%3Cg%20id%3D%22info%22%3E%3C%2Fg%3E%3Cg%20id%3D%22warning%22%3E%3C%2Fg%3E%3Cg%20id%3D%22plus-circle%22%3E%3C%2Fg%3E%3Cg%20id%3D%22minus-circle%22%3E%3C%2Fg%3E%3Cg%20id%3D%22vue%22%3E%3C%2Fg%3E%3Cg%20id%3D%22cog%22%3E%3C%2Fg%3E%3Cg%20id%3D%22logo%22%3E%3C%2Fg%3E%3Cg%20id%3D%22radio-check%22%3E%3C%2Fg%3E%3Cg%20id%3D%22eye-slash%22%3E%3Cpath%20d%3D%22M13.673%2C10.345l-3.097%2C3.096l39.853%2C39.854l3.097%2C-3.097l-39.853%2C-39.853Z%22%2F%3E%3Cpath%20d%3D%22M17.119%2C19.984l2.915%2C2.915c-3.191%2C2.717%20-5.732%2C6.099%20-7.374%2C9.058l-0.005%2C0.01c4.573%2C7.646%2011.829%2C14.872%2020.987%2C13.776c2.472%2C-0.296%204.778%2C-1.141%206.885%2C-2.35l2.951%2C2.95c-4.107%2C2.636%20-8.815%2C4.032%20-13.916%2C3.342c-9.198%2C-1.244%20-16.719%2C-8.788%20-21.46%2C-17.648c2.226%2C-4.479%205.271%2C-8.764%209.017%2C-12.053Zm6.63%2C-4.32c2.572%2C-1.146%205.355%2C-1.82%208.327%2C-1.868c0.165%2C-0.001%202.124%2C0.092%203.012%2C0.238c0.557%2C0.092%201.112%2C0.207%201.659%2C0.35c8.725%2C2.273%2015.189%2C10.054%2019.253%2C17.653c-1.705%2C3.443%20-3.938%2C6.398%20-6.601%2C9.277l-2.827%2C-2.827c1.967%2C-2.12%203.622%2C-4.161%204.885%2C-6.45c0%2C0%20-1.285%2C-2.361%20-2.248%2C-3.643c-0.619%2C-0.824%20-1.27%2C-1.624%20-1.954%2C-2.395c-0.54%2C-0.608%20-2.637%2C-2.673%20-3.136%2C-3.103c-3.348%2C-2.879%20-7.279%2C-5.138%20-11.994%2C-5.1c-1.826%2C0.029%20-3.582%2C0.389%20-5.249%2C0.995l-3.127%2C-3.127Z%22%20style%3D%22fill-rule%3Anonzero%3B%22%2F%3E%3Cpath%20d%3D%22M25.054%2C27.92l2.399%2C2.398c-0.157%2C0.477%20-0.243%2C0.987%20-0.243%2C1.516c0%2C2.672%202.169%2C4.841%204.841%2C4.841c0.529%2C0%201.039%2C-0.085%201.516%2C-0.243l2.399%2C2.399c-1.158%2C0.65%20-2.494%2C1.02%20-3.915%2C1.02c-4.425%2C0%20-8.017%2C-3.592%20-8.017%2C-8.017c0%2C-1.421%200.371%2C-2.756%201.02%2C-3.914Zm6.849%2C-4.101c0.049%2C-0.001%200.099%2C-0.002%200.148%2C-0.002c4.425%2C0%208.017%2C3.593%208.017%2C8.017c0%2C0.05%200%2C0.099%20-0.001%2C0.148l-8.164%2C-8.163Z%22%2F%3E%3C%2Fg%3E%3Cg%20id%3D%22eye%22%3E%3C%2Fg%3E%3Cg%20id%3D%22toggle-off%22%3E%3C%2Fg%3E%3Cg%20id%3D%22shredder%22%3E%3C%2Fg%3E%3Cg%20id%3D%22spinner--loading--dots-%22%20serif%3Aid%3D%22spinner%20%5Bloading%2C%20dots%5D%22%3E%3C%2Fg%3E%3Cg%20id%3D%22react%22%3E%3C%2Fg%3E%3Cg%20id%3D%22check-selected%22%3E%3C%2Fg%3E%3Cg%20id%3D%22turn-off%22%3E%3C%2Fg%3E%3Cg%20id%3D%22code-block%22%3E%3C%2Fg%3E%3Cg%20id%3D%22user%22%3E%3C%2Fg%3E%3Cg%20id%3D%22coffee-bean%22%3E%3C%2Fg%3E%3Cg%20id%3D%22coffee-beans%22%3E%3Cg%20id%3D%22coffee-bean1%22%20serif%3Aid%3D%22coffee-bean%22%3E%3C%2Fg%3E%3C%2Fg%3E%3Cg%20id%3D%22coffee-bean-filled%22%3E%3C%2Fg%3E%3Cg%20id%3D%22coffee-beans-filled%22%3E%3Cg%20id%3D%22coffee-bean2%22%20serif%3Aid%3D%22coffee-bean%22%3E%3C%2Fg%3E%3C%2Fg%3E%3Cg%20id%3D%22clipboard%22%3E%3C%2Fg%3E%3Cg%20id%3D%22clipboard-paste%22%3E%3C%2Fg%3E%3Cg%20id%3D%22clipboard-copy%22%3E%3C%2Fg%3E%3Cg%20id%3D%22Layer1%22%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E';
    } else {
      this.passwordInputType = 'password';
      this.passwordIcon = 'data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%20standalone%3D%22no%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3C!--%20License%3A%20Apache.%20Made%20by%20javisperez%3A%20https%3A%2F%2Fgithub.com%2Fjavisperez%2Ftoe-icons%20--%3E%3Csvg%20fill%3D%22%23000000%22%20width%3D%22800px%22%20height%3D%22800px%22%20viewBox%3D%220%200%2064%2064%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xml%3Aspace%3D%22preserve%22%20xmlns%3Aserif%3D%22http%3A%2F%2Fwww.serif.com%2F%22%20style%3D%22fill-rule%3Aevenodd%3Bclip-rule%3Aevenodd%3Bstroke-linejoin%3Around%3Bstroke-miterlimit%3A2%3B%22%3E%3Crect%20id%3D%22Icons%22%20x%3D%22-896%22%20y%3D%22-256%22%20width%3D%221280%22%20height%3D%22800%22%20style%3D%22fill%3Anone%3B%22%2F%3E%3Cg%20id%3D%22Icons1%22%20serif%3Aid%3D%22Icons%22%3E%3Cg%20id%3D%22Strike%22%3E%3C%2Fg%3E%3Cg%20id%3D%22H1%22%3E%3C%2Fg%3E%3Cg%20id%3D%22H2%22%3E%3C%2Fg%3E%3Cg%20id%3D%22H3%22%3E%3C%2Fg%3E%3Cg%20id%3D%22list-ul%22%3E%3C%2Fg%3E%3Cg%20id%3D%22hamburger-1%22%3E%3C%2Fg%3E%3Cg%20id%3D%22hamburger-2%22%3E%3C%2Fg%3E%3Cg%20id%3D%22list-ol%22%3E%3C%2Fg%3E%3Cg%20id%3D%22list-task%22%3E%3C%2Fg%3E%3Cg%20id%3D%22trash%22%3E%3C%2Fg%3E%3Cg%20id%3D%22vertical-menu%22%3E%3C%2Fg%3E%3Cg%20id%3D%22horizontal-menu%22%3E%3C%2Fg%3E%3Cg%20id%3D%22sidebar-2%22%3E%3C%2Fg%3E%3Cg%20id%3D%22Pen%22%3E%3C%2Fg%3E%3Cg%20id%3D%22Pen1%22%20serif%3Aid%3D%22Pen%22%3E%3C%2Fg%3E%3Cg%20id%3D%22clock%22%3E%3C%2Fg%3E%3Cg%20id%3D%22external-link%22%3E%3C%2Fg%3E%3Cg%20id%3D%22hr%22%3E%3C%2Fg%3E%3Cg%20id%3D%22info%22%3E%3C%2Fg%3E%3Cg%20id%3D%22warning%22%3E%3C%2Fg%3E%3Cg%20id%3D%22plus-circle%22%3E%3C%2Fg%3E%3Cg%20id%3D%22minus-circle%22%3E%3C%2Fg%3E%3Cg%20id%3D%22vue%22%3E%3C%2Fg%3E%3Cg%20id%3D%22cog%22%3E%3C%2Fg%3E%3Cg%20id%3D%22logo%22%3E%3C%2Fg%3E%3Cg%20id%3D%22radio-check%22%3E%3C%2Fg%3E%3Cg%20id%3D%22eye-slash%22%3E%3C%2Fg%3E%3Cg%20id%3D%22eye%22%3E%3Cpath%20d%3D%22M32.513%2C13.926c10.574%2C0.15%2019.141%2C9.894%2023.487%2C18.074c0%2C0%20-1.422%2C2.892%20-2.856%2C4.895c-0.694%2C0.969%20-1.424%2C1.913%20-2.191%2C2.826c-0.547%2C0.65%20-1.112%2C1.283%20-1.698%2C1.898c-5.237%2C5.5%20-12.758%2C9.603%20-20.7%2C8.01c-8.823%2C-1.77%20-15.732%2C-9.498%20-20.058%2C-17.629c0%2C0%201.248%2C-2.964%202.69%2C-4.964c0.646%2C-0.897%201.324%2C-1.77%202.034%2C-2.617c0.544%2C-0.649%201.108%2C-1.282%201.691%2C-1.897c4.627%2C-4.876%2010.564%2C-8.63%2017.601%2C-8.596Zm-0.037%2C4c-5.89%2C-0.022%20-10.788%2C3.267%20-14.663%2C7.35c-0.527%2C0.555%20-1.035%2C1.127%20-1.527%2C1.713c-0.647%2C0.772%20-1.265%2C1.569%20-1.854%2C2.386c-0.544%2C0.755%20-1.057%2C1.805%20-1.451%2C2.59c3.773%2C6.468%209.286%2C12.323%2016.361%2C13.742c6.563%2C1.317%2012.688%2C-2.301%2017.016%2C-6.846c0.529%2C-0.555%201.04%2C-1.128%201.534%2C-1.715c0.7%2C-0.833%201.366%2C-1.694%201.999%2C-2.579c0.557%2C-0.778%201.144%2C-1.767%201.588%2C-2.567c-3.943%2C-6.657%20-10.651%2C-13.944%20-19.003%2C-14.074Z%22%2F%3E%3Cpath%20d%3D%22M32.158%2C23.948c4.425%2C0%208.018%2C3.593%208.018%2C8.017c0%2C4.425%20-3.593%2C8.017%20-8.018%2C8.017c-4.424%2C0%20-8.017%2C-3.592%20-8.017%2C-8.017c0%2C-4.424%203.593%2C-8.017%208.017%2C-8.017Zm0%2C4.009c2.213%2C0%204.009%2C1.796%204.009%2C4.008c0%2C2.213%20-1.796%2C4.009%20-4.009%2C4.009c-2.212%2C0%20-4.008%2C-1.796%20-4.008%2C-4.009c0%2C-2.212%201.796%2C-4.008%204.008%2C-4.008Z%22%2F%3E%3C%2Fg%3E%3Cg%20id%3D%22toggle-off%22%3E%3C%2Fg%3E%3Cg%20id%3D%22shredder%22%3E%3C%2Fg%3E%3Cg%20id%3D%22spinner--loading--dots-%22%20serif%3Aid%3D%22spinner%20%5Bloading%2C%20dots%5D%22%3E%3C%2Fg%3E%3Cg%20id%3D%22react%22%3E%3C%2Fg%3E%3Cg%20id%3D%22check-selected%22%3E%3C%2Fg%3E%3Cg%20id%3D%22turn-off%22%3E%3C%2Fg%3E%3Cg%20id%3D%22code-block%22%3E%3C%2Fg%3E%3Cg%20id%3D%22user%22%3E%3C%2Fg%3E%3Cg%20id%3D%22coffee-bean%22%3E%3C%2Fg%3E%3Cg%20id%3D%22coffee-beans%22%3E%3Cg%20id%3D%22coffee-bean1%22%20serif%3Aid%3D%22coffee-bean%22%3E%3C%2Fg%3E%3C%2Fg%3E%3Cg%20id%3D%22coffee-bean-filled%22%3E%3C%2Fg%3E%3Cg%20id%3D%22coffee-beans-filled%22%3E%3Cg%20id%3D%22coffee-bean2%22%20serif%3Aid%3D%22coffee-bean%22%3E%3C%2Fg%3E%3C%2Fg%3E%3Cg%20id%3D%22clipboard%22%3E%3C%2Fg%3E%3Cg%20id%3D%22clipboard-paste%22%3E%3C%2Fg%3E%3Cg%20id%3D%22clipboard-copy%22%3E%3C%2Fg%3E%3Cg%20id%3D%22Layer1%22%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E';
    }
  }
  
 
  model = { password: '' , username: ''}

  constructor(private blogService: BlogService, private router: Router) { }

  login() {
    this.blogService.login(this.model.password,this.model.username).subscribe(
      (response) => {
        if (response == 200) {
          console.log("selam")
          this.router.navigate(['/control-panel']);
        } else {
          this.router.navigate(['/login']);
        }
      },
    
    );
  }
}