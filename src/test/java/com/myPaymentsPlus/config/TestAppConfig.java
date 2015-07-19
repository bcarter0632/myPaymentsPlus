package com.myPaymentsPlus.config;

import java.util.Properties;

import javax.persistence.EntityManagerFactory;
import javax.sql.DataSource;

import org.hibernate.cfg.Environment;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseBuilder;
import org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseType;
import org.springframework.orm.hibernate4.HibernateExceptionTranslator;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.JpaVendorAdapter;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.orm.jpa.vendor.Database;
import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@Configuration
@ComponentScan(basePackages = { "com.myPaymentsPlus.service" })
@EnableJpaRepositories(basePackages = { "com.myPaymentsPlus.repository" }, entityManagerFactoryRef = "entityManagerFactory", transactionManagerRef = "transactionManager")
@EnableTransactionManagement
public class TestAppConfig {

	public static final String DB_NAME = "MY_PAYMENTS_PLUS";

	@Bean(destroyMethod = "shutdown")
	public DataSource dataSource() {
		return new EmbeddedDatabaseBuilder().setType(EmbeddedDatabaseType.HSQL)
				.build();
	}

	public JpaVendorAdapter jpaAdapter() {
		HibernateJpaVendorAdapter adapter = new HibernateJpaVendorAdapter();
		adapter.setDatabase(Database.HSQL);

		return adapter;
	}

	public Properties jpaProperties() {
		Properties jpaProperties = new Properties();

		jpaProperties.put(Environment.HBM2DDL_AUTO, "create");
		jpaProperties.put(Environment.HBM2DDL_IMPORT_FILES, "data.sql");
		jpaProperties.put(
				"javax.persistence.schema-generation.create-database-schemas",
				"true");
		jpaProperties.put("javax.persistence.schema-generation.scripts.action",
				"create");
		jpaProperties.put(
				"javax.persistence.schema-generation.scripts.create-target",
				"src/test/resources/schema.sql");
		jpaProperties.put("javax.persistence.database-product-name", "HSQL");
		jpaProperties.put("jadira.usertype.autoRegisterUserTypes", "true");
		jpaProperties.put("jadira.usertype.databaseZone", "jvm");
		jpaProperties.put("jadira.usertype.javaZone", "jvm");

		return jpaProperties;
	}

	@Bean(destroyMethod = "close")
	public EntityManagerFactory entityManagerFactory() {
		LocalContainerEntityManagerFactoryBean factory = new LocalContainerEntityManagerFactoryBean();
		factory.setDataSource(dataSource());
		factory.setJpaProperties(jpaProperties());
		factory.setPersistenceUnitName(DB_NAME);
		factory.setPackagesToScan("com.myPaymentsPlus.domain");
		factory.setJpaVendorAdapter(jpaAdapter());
		factory.afterPropertiesSet();

		return factory.getObject();
	}

	@Bean(name = "transactionManager")
	public PlatformTransactionManager transactionManager() {
		return new JpaTransactionManager(entityManagerFactory());
	}

	@Bean
	public HibernateExceptionTranslator exceptionTranslator() {
		return new HibernateExceptionTranslator();
	}

}
