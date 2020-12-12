import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit
} from "@angular/core";

@Directive({
  selector: "[appColor]"
})
export class ColorDirective implements OnInit {
  @HostListener("mouseenter") private surligne() {
    console.log(this.couleursSurlignage);
    this.el.nativeElement.style.color = this.couleursSurlignage.color;
    this.el.nativeElement.style.backgroundColor = this.couleursSurlignage.backgroundColor;
  }

  @Input("appColor") public couleursSurlignage: {
    color: string;
    backgroundColor: string;
  };

  constructor(private el: ElementRef<HTMLLIElement>) {}

  ngOnInit() {}
}
