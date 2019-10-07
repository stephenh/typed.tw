// http://github.com/dvkndn/typed-tailwind
export const Tw = (): Tailwind => new Tailwind();

class Tailwind {
  value = "";

  // Getter methods
  // Why "$":
  // - https://github.com/microsoft/TypeScript/issues/2361
  // - https://github.com/microsoft/TypeScript/issues/4538
  // - https://en.wikipedia.org/wiki/Regular_expression
  $(): string { return this.value; }
  [Symbol.toPrimitive](): string { return this.$(); }

  // Building methods
  private add(value: string): Tailwind {
    this.value = `${this.value} ${value}`;
    return this;
  }

  // Styling methods
  textWhite(): Tailwind { return this.add("text-white"); }
  textGray(): Tailwind { return this.add("text-gray"); }
  textBlack(): Tailwind { return this.add("text-black"); }
  textRed(): Tailwind { return this.add("text-red"); }
  textBlue(): Tailwind { return this.add("text-blue"); }
  textGreen(): Tailwind { return this.add("text-green"); }
  hoverTextWhite(): Tailwind { return this.add("hover:text-white"); }
  hoverTextGray(): Tailwind { return this.add("hover:text-gray"); }
  hoverTextBlack(): Tailwind { return this.add("hover:text-black"); }
  hoverTextRed(): Tailwind { return this.add("hover:text-red"); }
  hoverTextBlue(): Tailwind { return this.add("hover:text-blue"); }
  hoverTextGreen(): Tailwind { return this.add("hover:text-green"); }
  smTextWhite(): Tailwind { return this.add("sm:text-white"); }
  smTextGray(): Tailwind { return this.add("sm:text-gray"); }
  smTextBlack(): Tailwind { return this.add("sm:text-black"); }
  smTextRed(): Tailwind { return this.add("sm:text-red"); }
  smTextBlue(): Tailwind { return this.add("sm:text-blue"); }
  smTextGreen(): Tailwind { return this.add("sm:text-green"); }
  smHoverTextWhite(): Tailwind { return this.add("sm:hover:text-white"); }
  smHoverTextGray(): Tailwind { return this.add("sm:hover:text-gray"); }
  smHoverTextBlack(): Tailwind { return this.add("sm:hover:text-black"); }
  smHoverTextRed(): Tailwind { return this.add("sm:hover:text-red"); }
  smHoverTextBlue(): Tailwind { return this.add("sm:hover:text-blue"); }
  smHoverTextGreen(): Tailwind { return this.add("sm:hover:text-green"); }
}
