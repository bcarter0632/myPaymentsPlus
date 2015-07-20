package com.myPaymentsPlus.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.myPaymentsPlus.domain.CreditCard;
import com.myPaymentsPlus.service.PaymentService;

@RestController
@RequestMapping("payments")
public class CreditCardController {

	private final PaymentService paymentService;

	@Autowired
	public CreditCardController(PaymentService paymentService) {
		this.paymentService = paymentService;
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public CreditCard get(@PathVariable("id") Long id) {
		return paymentService.findById(id);
	}

	@RequestMapping(value = "/all/{parentId}/", method = RequestMethod.GET)
	public List<CreditCard> getByParentId(
			@PathVariable("parentId") Long parentId) {
		return paymentService.findAllByParentId(parentId);
	}

	@RequestMapping(value = "/{parentId}", method = { RequestMethod.PUT,
			RequestMethod.POST })
	public CreditCard save(@PathVariable("parentId") Long parentId,
			@RequestBody CreditCard student) {
		return paymentService.save(parentId, student);
	}
}
