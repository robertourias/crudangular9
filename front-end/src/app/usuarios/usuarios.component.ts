import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  lista: any = [];
  limit = 10;
  start = 0;
  nome = '';
  usuario = '';
  senha = '';
  id = 0;
  title = 'Inserir Usuário';
  textoBuscar = '';
  caminho = 'apiUsuarios.php';

  constructor(private provider: ApiServiceService, private router: Router) { }

  ngOnInit(): void {
    this.lista = [];
    this.start = 0;
    this.carregar(this.textoBuscar);
  }

  carregar(texto: string) {
    this.lista = [];
    this.start = 0;
    return new Promise(resolve => {
      const dados = {
        requisicao : 'listar',
        limit: this.limit,
        start: this.start,
        textoBuscar: texto
      };

      this.provider.Api(dados, this.caminho).subscribe((data: any) => {
        for (const dado of data.result) {
          this.lista.push(dado);
        }
        resolve(true);
      });

    });
  }


  cadastrar() {
    if (this.nome !== '' && this.usuario !== '' && this.senha !== '') {
      return new Promise(resolve => {
        const dados = {
          requisicao : 'add',
          nome: this.nome,
          usuario: this.usuario,
          senha: this.senha
        };
        this.provider.Api(dados, this.caminho)
        .subscribe((data: any) => {

          if (data.success) {
            alert('Salvo com sucesso!!');
            window.location.reload();
            // this.router.navigate(['/usuarios']);
          } else {
            alert('Erro ao Salvar!!');
          }

        });
      });
    } else {
      alert('Prencha os Campos!');
    }
  }

  dadosEditar(nome: string, usuario: string, senha: string, id: number ) {
    this.title = 'Editar Usuário';
    this.nome = nome;
    this.usuario = usuario;
    this.senha = senha;
    this.id = id;
  }


  editar() {
    if (this.nome !== '' && this.usuario !== '' && this.senha !== '') {
    return new Promise(resolve => {
      const dados = {
        requisicao : 'editar',
        nome: this.nome,
        usuario: this.usuario,
        senha: this.senha,
        id: this.id
      };
      this.provider.Api(dados, this.caminho).subscribe((data: any) => {
        if (data.success) {
          alert('Editado com sucesso!!');
          window.location.reload();
        } else {
          alert('Erro ao Editar!!');
        }
      });
    });

  } else {
    alert('Prencha os Campos!');
    }
  }


  excluir(idu: string) {
    return new Promise(resolve => {
        const dados = {
          requisicao : 'excluir',
          id: idu
        };
        this.provider.Api(dados, this.caminho).subscribe((data: any) => {
          if (data.success) {
            window.location.reload();
          } else {
            alert('Erro ao Excluir!!');
          }
        });
      });
  }


}
