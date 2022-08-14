import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  // providers: [ModalService]
})
export class ModalComponent implements OnInit {

  @Input() modalID = '';
  
  constructor(public modalService: ModalService, 
              public elRef: ElementRef) { }

  ngOnInit(): void {
    document.body.appendChild(this.elRef.nativeElement)
  }

  closeModal() {
    this.modalService.isModalToggle(this.modalID);
  }

}
