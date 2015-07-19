package com.myPaymentsPlus.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.myPaymentsPlus.domain.Child;

public interface StudentRepository extends JpaRepository<Child, Long> {

	List<Child> findAllByParentId(Long parentId);
}
