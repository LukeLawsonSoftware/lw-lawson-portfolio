import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Certification } from '../../../types/content/certification.interface';

@Component({
  selector: 'app-certification-card',
  templateUrl: './certification-card.component.html',
  styleUrls: ['./certification-card.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class CertificationCardComponent {
  @Input() certification!: Certification;
}
