package com.myPaymentsPlus.repository;

import static org.junit.Assert.assertEquals;

import java.math.BigDecimal;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.myPaymentsPlus.config.TestAppConfig;
import com.myPaymentsPlus.domain.Child;
import com.myPaymentsPlus.domain.Parent;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = TestAppConfig.class)
public class StudentRepositoryTest {

	@Autowired
	private StudentRepository studentRepository;

	@Autowired
	private ParentRepository parentRepository;

	@Test
	public void saveStudent() {

		Parent parent = new Parent();
		parent.setFirstName("Parent");
		parent.setLastName("Test");

		Child student = new Child();
		student.setFirstName("Test");
		student.setLastName("Last");
		student.setBalance(BigDecimal.TEN);

		parent.addChild(student);
		parentRepository.save(parent);

		Parent parent1 = parentRepository.findOne(1L);
		Child st = studentRepository.findOne(1L);

		assertEquals(1, parent1.getId().longValue());
		assertEquals(1, parent1.getChildren().size());
	}
}