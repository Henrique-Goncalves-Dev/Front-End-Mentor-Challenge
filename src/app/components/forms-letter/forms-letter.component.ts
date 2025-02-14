import {Component, forwardRef, signal} from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  FormGroup,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import {ButtonPrimaryComponent} from '../button-primary/button-primary.component';
import {FormletterService} from '../../services/formletter.service';

@Component({
  selector: 'app-forms-letter',
  standalone: true,
  imports: [
    ButtonPrimaryComponent,
    ReactiveFormsModule,
  ],
  providers:[
    {provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => FormsLetterComponent),
  multi: true}
  ],
  templateUrl: './forms-letter.component.html',
  styleUrl: './forms-letter.component.scss'
})
export class FormsLetterComponent implements ControlValueAccessor {
  formletterForm!: FormGroup;
  loading = signal(false);

  constructor(private service:FormletterService) {
    this.formletterForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      emailAddress: new FormControl('', [Validators.required, Validators.email]),
      queryType : new FormControl('', [Validators.required]),
      message: new FormControl('', [Validators.required]),
      checkBox: new FormControl('', [Validators.required])


    });

  }

  onSubmit() {
    console.log("Tentando enviar formulário...", this.formletterForm.value);

    this.loading.set(true);

    if (this.formletterForm.valid) {
      const { firstName, lastName, emailAddress, queryType, message, checkBox } = this.formletterForm.value;

      this.service.sendData(firstName, lastName, emailAddress, queryType, message, checkBox).subscribe({
        next: () => {
          console.log("✅ Formulário enviado com sucesso!");
          this.formletterForm.reset();
          this.loading.set(false);
        },
        error: (err) => {
          console.error("❌ Erro ao enviar:", err);
          this.loading.set(false);
        }
      });
    } else {
      console.warn("⚠️ Formulário inválido!", this.formletterForm.errors);
      this.loading.set(false);
    }
  }


  value: string = ''
  onChange: any = () => {}
  onTouched: any = () => {}
  onInput(event: Event){
    const value = (event.target as HTMLInputElement).value
    this.onChange(value)
  }

  writeValue(value: any): void {
    this.value = value
  }

  registerOnChange(fn: any): void {
    this.onChange = fn
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn
  }

  setDisabledState(isDisabled: boolean): void {}



}
