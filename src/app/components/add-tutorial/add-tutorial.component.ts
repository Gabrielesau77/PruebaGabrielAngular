import { Component, OnInit } from '@angular/core';
import { Tutorial } from 'src/app/models/tutorial.model';
import { TutorialService } from 'src/app/services/tutorial.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-tutorial.component.html',
  styleUrls: ['./add-tutorial.component.css'],
})
export class AddTutorialComponent implements OnInit {
  tutorial: Tutorial = {
    id: '',
    amount: '',
    description: '',
  };
  submitted = false;
  message = '';

  constructor(
    private tutorialService: TutorialService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.message = '';
  }
  saveTutorial(): void {
    const data = {
      amount: this.tutorial.amount,
      description: this.tutorial.description,
    };

    this.tutorialService.create(data).subscribe(
      (response) => {
        console.log(response);
        this.submitted = true;
      },
      (error) => {
        console.log(error);
        this.message = 'Verifique los datos';
      }
    );
  }
  list() {
    this.router.navigate(['/tutorials']);
  }
  newTutorial(): void {
    this.submitted = false;
    this.tutorial = {
      amount: '',
      description: '',
    };
  }
}
