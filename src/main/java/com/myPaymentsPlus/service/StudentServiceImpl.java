package com.myPaymentsPlus.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.myPaymentsPlus.domain.Child;
import com.myPaymentsPlus.domain.Parent;
import com.myPaymentsPlus.repository.ParentRepository;
import com.myPaymentsPlus.repository.StudentRepository;

@Service
public class StudentServiceImpl implements StudentService {

	private final ParentRepository parentRepository;
	private final StudentRepository studentRepository;

	@Autowired
	public StudentServiceImpl(ParentRepository parentRepository,
			StudentRepository studentRepository) {
		this.parentRepository = parentRepository;
		this.studentRepository = studentRepository;
	}

	public Child findById(Long studentId) {
		return studentRepository.findOne(studentId);
	}

	public List<Child> findAllByParentId(Long parentId) {
		return studentRepository.findAllByParentId(parentId);
	}

	public Child save(Long parentId, Child student) {
		if (student.getId() == null) {
			Parent parent = parentRepository.findOne(parentId);
			student.setParent(parent);
		}
		return studentRepository.save(student);
	}

}
