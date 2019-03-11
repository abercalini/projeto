package br.com.igreja.resource;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import br.com.igreja.model.Arquivo;
import br.com.igreja.repository.ArquivoRepository;

@RestController
@RequestMapping("/arquivo")
public class ArquivoResource {
	
	
	@Autowired
	private ArquivoRepository arquivoRepository;
	
	private byte[] arquivoFoto;
	
	@PostMapping("/upload")
	@PreAuthorize("hasAuthority('ROLE_CADASTRAR_OBJETO')")
	public void salvar(@RequestParam MultipartFile arquivo) throws IOException {
		arquivoFoto = arquivo.getBytes();
	}
	
	@PostMapping
	@PreAuthorize("hasAuthority('ROLE_CADASTRAR_OBJETO')")
	public ResponseEntity<Arquivo> salvar(@RequestBody Arquivo arquivo) {
		arquivo.setArquivo(arquivoFoto);
		Arquivo arquivoSalvo = arquivoRepository.save(arquivo);
		return ResponseEntity.status(HttpStatus.CREATED).body(arquivoSalvo);
	}
	
	@GetMapping("/{codigo}")
	@PreAuthorize("hasAuthority('ROLE_PESQUISAR_OBJETO')")
	@ResponseStatus(HttpStatus.OK)
	public List<Arquivo> listar(@PathVariable Long codigo) {
		return arquivoRepository.filtrarPorIgreja(codigo);
	}
	
	
}
