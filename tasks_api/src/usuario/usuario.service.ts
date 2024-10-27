import { Injectable } from '@nestjs/common';
import { UsuarioDto } from './usuario.dto';
import {v4 as uuid} from 'uuid';
import { hashSync as bcryptHashSync } from 'bcrypt';


@Injectable()
export class UsuarioService {
    private readonly usuarios: UsuarioDto[] = [];

    create(usuario: UsuarioDto){
        usuario.id = uuid();
        usuario.senha = bcryptHashSync(usuario.senha, 10);
        this.usuarios.push(usuario);

    }
}
