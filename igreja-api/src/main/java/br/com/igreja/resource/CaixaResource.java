package br.com.igreja.resource;

import java.math.BigDecimal;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import br.com.igreja.model.Caixa;
import br.com.igreja.repository.CaixaRepository;

@RestController
@RequestMapping("/caixa")
public class CaixaResource {
	
	@Autowired
	private CaixaRepository caixaRepository;
	
	@PostMapping
	@PreAuthorize("hasAuthority('ROLE_CADASTRAR_OBJETO')")
	public ResponseEntity<Caixa> salvar(@RequestBody Caixa caixa) {
		caixa.setSaldoFechamento(caixa.getSaldoAbertura());
		Caixa caixaRetornado = caixaRepository.save(caixa);
		return ResponseEntity.status(HttpStatus.CREATED).body(caixaRetornado);
	}
	
	@GetMapping("/filtrarporigreja/{codigo}")
	@PreAuthorize("hasAuthority('ROLE_PESQUISAR_OBJETO')")
	@ResponseStatus(HttpStatus.OK)
	public List<Caixa> listarTodos(@PathVariable Long codigo) {
		return caixaRepository.filtrarPorIgreja(codigo);
	}
	
	@PutMapping("/{codigo}")
	@PreAuthorize("hasAuthority('ROLE_EDITAR_OBJETO')")
	public ResponseEntity<Caixa> atualizar(@PathVariable Long codigo, @RequestBody boolean status) {
		Caixa caixaRetornado = caixaRepository.findOne(codigo);
	/*	//Validando o valor do fechamento do caixa
		if (status == false) {
			caixaRetornado.setSaldoFechamento(caixaRetornado.getSaldoAbertura().add(caixaRetornado.getValorReceita()).subtract(caixaRetornado.getValorDespesas()));
		} */
		// caixaRetornado.setSaldoFechamento(caixaRetornado.getSaldoAbertura().add(caixaRetornado.getValorReceita().subtract(caixaRetornado.getValorDespesas())));
		//System.out.println(caixaRetornado.getSaldoAbertura().add(caixaRetornado.getValorReceita().subtract(caixaRetornado.getValorDespesas())));
		caixaRetornado.setStatus(status);
		caixaRepository.save(caixaRetornado);
		return ResponseEntity.status(HttpStatus.OK).body(caixaRetornado);
	}
	
	@GetMapping("verificarcaixas/{codigo}")
	@PreAuthorize("hasAuthority('ROLE_PESQUISAR_OBJETO')")
	@ResponseStatus(HttpStatus.OK)
	public List<Caixa> verificarCaixasAberto(@PathVariable Long codigo) {
		return caixaRepository.verificarCaixa(codigo);
	}
	
	@PutMapping("atualizarsaldo/{codigo}")
	@PreAuthorize("hasAuthority('ROLE_EDITAR_OBJETO')")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void atualizar(@PathVariable Long codigo, @RequestBody BigDecimal valor) {
		Caixa caixaRetornado = caixaRepository.findOne(codigo);
		
		// Validando o valor da receita do caixa
		caixaRetornado.setValorReceita(valor = valor.add(caixaRetornado.getValorReceita()));
		caixaRetornado.setSaldoFechamento(caixaRetornado.getValorReceita().add(caixaRetornado.getSaldoAbertura().subtract(caixaRetornado.getValorDespesas())));
		
		caixaRepository.save(caixaRetornado);
	}
	
	@PutMapping("atualizarsaldoexcluir/{codigo}")
	@PreAuthorize("hasAuthority('ROLE_EDITAR_OBJETO')")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void atualizarSaldoExclusao(@PathVariable Long codigo, @RequestBody BigDecimal valor) {
		Caixa caixaRetornado = caixaRepository.findOne(codigo);
		
		//Validando a exclusão da receita
		caixaRetornado.setValorReceita(caixaRetornado.getValorReceita().subtract(valor));
		caixaRetornado.setSaldoFechamento(caixaRetornado.getSaldoFechamento().subtract(valor));
		
		caixaRepository.save(caixaRetornado);
	}
	
	
	@PutMapping("atulizarvalorproporcional/{codigo}")
	@PreAuthorize("hasAuthority('ROLE_EDITAR_OBJETO')")
	@ResponseStatus(HttpStatus.OK)
	public void atualizarSaldoParcial(@PathVariable Long codigo, @RequestBody BigDecimal valor) {
		Caixa caixaRetornado = caixaRepository.findOne(codigo);
		
		if (valor.compareTo(new BigDecimal("0")) < 0 ) {
			String converter = valor.toString();
			String replace = converter.replace('-', '+');
			caixaRetornado.setValorReceita(caixaRetornado.getValorReceita().add(new BigDecimal(replace)));
		} else {
			caixaRetornado.setValorReceita(caixaRetornado.getValorReceita().subtract(valor));
		}
		
		caixaRetornado.setSaldoFechamento(caixaRetornado.getSaldoAbertura().add(caixaRetornado.getValorReceita().subtract(caixaRetornado.getValorDespesas())));
		caixaRepository.save(caixaRetornado);
	}
	
	@PutMapping("atualizarsaldodespesa/{codigo}")
	@PreAuthorize("hasAuthority('ROLE_EDITAR_OBJETO')")
	@ResponseStatus(HttpStatus.OK)
	public void atualizarSaldo(@PathVariable Long codigo, @RequestBody BigDecimal valor) {
		Caixa caixaRetornado = caixaRepository.findOne(codigo);
		BigDecimal valorAux = valor;
		caixaRetornado.setValorDespesas(valor = valor.add(caixaRetornado.getValorDespesas()));
		caixaRetornado.setSaldoFechamento(caixaRetornado.getSaldoFechamento().subtract(valorAux));
		System.out.println(caixaRetornado.getSaldoFechamento());
		caixaRepository.save(caixaRetornado);
	}
	
	
	
}
