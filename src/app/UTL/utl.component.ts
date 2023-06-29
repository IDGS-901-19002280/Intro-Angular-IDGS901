import { Component } from '@angular/core';

@Component({
    selector:'app-utl',
    template : `
    <form>
        <label for="nombre">Nombre:</label>
        <input type="tel" id="nombre" placeholder="Nombre">
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    `
})

export class utlComponent{
    constructor(){
        
    }
}