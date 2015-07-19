package com.myPaymentsPlus.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.myPaymentsPlus.domain.Child;
import com.myPaymentsPlus.repository.StudentRepository;

@Service
public class StudentServiceImpl implements StudentService {

	private final StudentRepository studentRepository;

	@Autowired
	public StudentServiceImpl(StudentRepository studentRepository) {
		this.studentRepository = studentRepository;
	}

	public Child findById(Long studentId) {
		return studentRepository.findOne(studentId);
	}

	public List<Child> findAllByParentId(Long parentId) {
		return studentRepository.findAllByParentId(parentId);
	}

	public Child save(Child student) {
		return studentRepository.save(student);
	}

}
