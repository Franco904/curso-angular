import { EventEmitter, Injectable } from "@angular/core";
import { LogService } from "../ser/log.service";

@Injectable({
    providedIn: 'root'
})
export class CursosService {

    private cursos: string[] = ['Angular', 'Java', 'MySQL', 'Python', 'Networking'];

    emitirCursoCriado = new EventEmitter();
    static criouNovoCurso = new EventEmitter(); // Variável inacessível à instâncias de CursosService

    constructor(private logService: LogService) {
        console.log('CursosService');
    }

    getCursos() {
        this.logService.imprimir('Lista de cursos obtida.');
        return this.cursos;
    }

    addCurso(curso: string) {
        this.logService.imprimir(`Curso "${curso}" foi criado.`);
        this.cursos.push(curso);
        this.emitirCursoCriado.emit(curso);
        CursosService.criouNovoCurso.emit(curso);
    }
}