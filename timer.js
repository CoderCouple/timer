class Timer{

    constructor (timeValue, startButton, pauseButton, callbacks) {
        this.timeValue = timeValue;
        this.startButton = startButton;
        this.pauseButton = pauseButton;
        this.itervalHandel = null;

        if(callbacks){
            this.onStart = callbacks.onStart;
            this.onPause = callbacks.onPause;
            this.onTick = callbacks.onTick;
        }

        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click', this.stop);
    }

    start = () => { 
        // This is done to avoid the 1 sec wait before seeing any update.
        this.onStart(this.timeValue.value);
        this.tick();
        if(!this.itervalHandel )
            this.itervalHandel = setInterval(this.tick, 200);
    };

    stop = () => {
        clearInterval(this.itervalHandel);
        this.itervalHandel = null;
    };

    tick = () => {
        if(this.timeValueRemaining <= 0)
            this.stop();
        else{
            this.remainigValue = this.timeValueRemaining;
            this.timeValue.value = (this.remainigValue - 0.2).toFixed(2);
            this.onTick(this.timeValueRemaining);
        }    
    };

    get timeValueRemaining(){
        return parseFloat(this.timeValue.value);
    }

}
