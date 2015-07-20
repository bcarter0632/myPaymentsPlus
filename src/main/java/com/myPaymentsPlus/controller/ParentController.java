package com.myPaymentsPlus.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.myPaymentsPlus.domain.Parent;
import com.myPaymentsPlus.repository.ParentRepository;
import com.myPaymentsPlus.service.ParentService;

@RestController
@RequestMapping("parents")
public class ParentController {

	private ParentRepository parentRepository;
	private ParentService parentService;

	@Autowired
	public ParentController(ParentRepository parentRepository,
			ParentService parentService) {
		this.parentRepository = parentRepository;
		this.parentService = parentService;
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public Parent get(@PathVariable("id") Long id) {
		return parentRepository.findOne(id);
	}

	@RequestMapping(method = { RequestMethod.PUT, RequestMethod.POST })
	public Parent save(@RequestBody Parent parent) {
		return parentService.save(parent);
	}
}
