// ** object( instance ) ဆောက်ပီး သုံးတာဖြစ်ဖြစ် , extendsလုပ်တာပဲဖြစ်ဖြစ်

// *! Abstract method ထည့်ထားရင် မဖြစ်မနေ ပြန်ခေါ်သုံးပေးရ

export abstract class Vehicles {
  constructor(public brand: string, public model: string) {}

  abstract startEngine(): void;

  displayInfo(): void {
    console.log(`Vehicle : ${this.brand} ${this.model}`);
  }
}
