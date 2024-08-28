import { Component, TemplateRef, ViewEncapsulation } from '@angular/core';
import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css',
  encapsulation: ViewEncapsulation.None
})
export class NavigationComponent {
  closeResult = '';

  constructor(private modalService: NgbModal) {}

  open(content: TemplateRef<any>) {
		this.modalService.open(content,
        { ariaLabelledBy: 'modal-basic-title',
          container: '.navigation',
          windowClass: 'modal',
          backdrop: true
        }).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);
	}

  close(content: TemplateRef<any>) {
    this.modalService.dismissAll();
  }

  private getDismissReason(reason: any): string {
		switch (reason) {
			case ModalDismissReasons.ESC:
				return 'by pressing ESC';
			case ModalDismissReasons.BACKDROP_CLICK:
				return 'by clicking on a backdrop';
			default:
				return `with: ${reason}`;
		}
	}
}
