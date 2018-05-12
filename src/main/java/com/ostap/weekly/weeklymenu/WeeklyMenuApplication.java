package com.ostap.weekly.weeklymenu;

import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Profile;

import javax.sql.DataSource;
import java.sql.SQLException;

@SpringBootApplication
public class WeeklyMenuApplication {
  @Value("${spring.datasource.url}")
  private String dbUrl;

  public static void main(String[] args) {
    SpringApplication.run(WeeklyMenuApplication.class, args);
  }

  @Profile("production")
  @Bean
  public DataSource prodDataSource() throws SQLException {
    if (dbUrl == null || dbUrl.isEmpty()) {
      return new HikariDataSource();
    } else {
      HikariConfig config = new HikariConfig();
      config.setJdbcUrl(dbUrl);
      return new HikariDataSource(config);
    }
  }

  @Profile("local")
  @Bean
  public DataSource devDataSource() throws SQLException {
      HikariConfig config = new HikariConfig();
      config.setJdbcUrl("jdbc:postgresql://localhost:5432/weekly-menu");
      config.setUsername("weekly");
      config.setPassword("weekly");
      return new HikariDataSource(config);
  }
}
