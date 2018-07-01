module Tape {

    export class PopView extends Laya.Sprite {

        public pop: any;
        public data: any;
        public isTranslucent: boolean = false;
        public canceledOnTouchOutside: boolean = false;

        public onShow?(): void;
        public onHide?(): void;

        public constructor() {
            super();
            this.width = Laya.stage.width;
            this.height = Laya.stage.height;
            setTimeout(() => {
                if (!this.isTranslucent) {
                    var bg: Laya.Sprite = new Laya.Sprite();
                    bg.graphics.save();
                    bg.alpha = 0.5;
                    bg.graphics.drawRect(0, 0, Laya.stage.width, Laya.stage.height, "#000000");
                    bg.graphics.restore();
                    bg.width = Laya.stage.width;
                    bg.height = Laya.stage.height;
                    bg.on(Laya.Event.CLICK, this, (e: Laya.Event) => {
                        if (this.canceledOnTouchOutside) {
                            this.finish();
                        }
                        e.stopPropagation();
                    });
                    this.addChildAt(bg, 0);
                }
            }, 0);
        }

        protected finish() {
            PopManager.hidePop(this.pop);
        }

    }

}