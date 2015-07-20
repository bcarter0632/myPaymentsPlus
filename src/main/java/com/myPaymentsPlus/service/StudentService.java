package com.myPaymentsPlus.service;

import java.util.List;

import com.myPaymentsPlus.domain.Child;

public interface StudentService {

	public Child findById(Long studentId);

	public List<Child> findAllByParentId(Long parentId);

	public Child save(Long parentId, Child student);
}
