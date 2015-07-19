package com.myPaymentsPlus.controller;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.runners.MockitoJUnitRunner;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.converter.StringHttpMessageConverter;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.joda.JodaModule;
import com.myPaymentsPlus.domain.Parent;
import com.myPaymentsPlus.repository.ParentRepository;
import com.myPaymentsPlus.service.ParentService;

@RunWith(MockitoJUnitRunner.class)
public class ParentControllerTest {

	@Autowired
	private MockMvc mockMvc;
	@Mock
	private ParentRepository parentRepository;
	@Mock
	private ParentService parentService;

	private ObjectMapper mapper;

	@Before
	public void setup() throws Exception {
		mapper = new ObjectMapper();
		mapper.registerModule(new JodaModule());

		MappingJackson2HttpMessageConverter converter = new MappingJackson2HttpMessageConverter();
		converter.setObjectMapper(mapper);

		mockMvc = MockMvcBuilders
				.standaloneSetup(
						new ParentController(parentRepository, parentService))
				.setMessageConverters(converter,
						new StringHttpMessageConverter()).build();
	}

	// @Test
	// public void getAllCompanies() throws Exception {
	// Company response = new Company("test");
	// when(companyRepository.findAll()).thenReturn(Arrays.asList(response));
	// mockMvc.perform(
	// get("/admin/companies").accept(MediaType.APPLICATION_JSON))
	// .andDo(print())
	// .andExpect(status().isOk())
	// .andExpect(
	// content().contentTypeCompatibleWith(
	// MediaType.APPLICATION_JSON));
	// }
	//
	// @Test
	// public void getAllPaged() throws Exception {
	// Company response = new Company("test");
	// Pageable pageable = new PageRequest(0, 10);
	// when(companyRepository.findAll(pageable)).thenReturn(
	// new PageImpl<Company>(Arrays.asList(response)));
	// mockMvc.perform(
	// get("/admin/companies/page").param("page", "0")
	// .param("size", "10").accept(MediaType.APPLICATION_JSON))
	// .andDo(print())
	// .andExpect(status().isOk())
	// .andExpect(
	// content().contentTypeCompatibleWith(
	// MediaType.APPLICATION_JSON));
	// }
	//
	// @Test
	// public void getByCompanyId() throws Exception {
	// Company response = new Company("test");
	// response.setId(1L);
	// when(companyRepository.findOne(1L)).thenReturn(response);
	// mockMvc.perform(
	// get("/admin/companies/" + 1).accept(MediaType.APPLICATION_JSON))
	// .andDo(print())
	// .andExpect(status().isOk())
	// .andExpect(
	// content().contentTypeCompatibleWith(
	// MediaType.APPLICATION_JSON));
	// }

	@Test
	public void saveCompany() throws Exception {
		Parent parent = new Parent();
		parent.setFirstName("Test");

		String json = mapper.writeValueAsString(parent);
		when(parentService.save(parent)).thenReturn(parent);
		mockMvc.perform(
				post("/parents").accept(MediaType.APPLICATION_JSON)
						.contentType(MediaType.APPLICATION_JSON).content(json))
				.andDo(print())
				.andExpect(status().isOk())
				.andExpect(
						content().contentTypeCompatibleWith(
								MediaType.APPLICATION_JSON));
	}
}