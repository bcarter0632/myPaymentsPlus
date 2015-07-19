package com.myPaymentsPlus.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.myPaymentsPlus.domain.Child;
import com.myPaymentsPlus.service.StudentService;

@RestController
@RequestMapping("students")
public class StudentController {

	private final StudentService studentService;

	@Autowired
	public StudentController(StudentService studentService) {
		this.studentService = studentService;
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public Child get(@PathVariable("id") Long id) {
		return studentService.findById(id);
	}

	@RequestMapping(value = "/all/{parentId}/", method = RequestMethod.GET)
	public List<Child> getByParentId(@PathVariable("parentId") Long parentId) {
		return studentService.findAllByParentId(parentId);
	}

	@RequestMapping(method = { RequestMethod.PUT, RequestMethod.POST })
	public Child save(@RequestBody Child student) {
		return studentService.save(student);
	}
}
