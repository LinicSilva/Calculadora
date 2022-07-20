import { TestBed } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  let service: CalculadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculadoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deve garantir que 1 + 4 = 5', () => {
    let soma = service.calcular(1, 4, '+');
    expect(soma).toEqual(5);
  });

  it('deve garantir que 1 - 4 = -3', () => {
    let subtracao = service.calcular(1, 4, '-');
    expect(subtracao).toEqual(-3);
  });

  it('deve garantir que 1 / 4 = 0.25', () => {
    let divisao = service.calcular(1, 4, '/');
    expect(divisao).toEqual(0.25);
  });

  it('deve garantir que 1 * 4 = 4', () => {
    let multiplicacao = service.calcular(1, 4, '*');
    expect(multiplicacao).toEqual(4);
  });

  it('deve retornar 0 para operação inválida', () => {
    let operacao = service.calcular(1, 4, '%');
    expect(operacao).toEqual(0);
  });
});
