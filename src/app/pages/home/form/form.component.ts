import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  myForm: FormGroup;
  formHistory: { [key: string]: any }[] = [];
  undoneHistory: { [key: string]: any }[] = [];

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      name: [''],
      age: [''],
      gender: [''],
      email: [''],
      phoneNumber: [''],
      acceptTerms: [false]
    });
    this.myForm.valueChanges.subscribe(value => {
      this.formHistory.push({ ...value });
      this.undoneHistory = []; 
    });
  }

  canUndo() {
    return this.formHistory.length >= 1;
  }

  canRedo() {
    return this.undoneHistory.length > 0;
  }

  undo() {
    if (this.canUndo()) {
      const previousState = this.formHistory.pop();
      if (previousState) {
        this.undoneHistory.push(previousState);
      }
      const currentState = this.formHistory[this.formHistory.length - 1];
      if (currentState) {
        this.myForm.setValue(currentState, { emitEvent: false });
      }
    }
  }
  
  redo() {
    if (this.canRedo()) {
      const redoState = this.undoneHistory.pop();
      if (redoState) {
        this.formHistory.push(redoState);
        this.myForm.setValue(redoState, { emitEvent: false });
      }
    }
  }
}
