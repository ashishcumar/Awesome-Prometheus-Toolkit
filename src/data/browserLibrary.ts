import docker from "../assets/docker.svg";
import netdata from "../assets/netdata.svg";
import prometheus from "../assets/prometheus.svg";
import puzzle from "../assets/puzzle.svg";
import vmware from "../assets/vmware.svg";
import windows from "../assets/windows.svg";
import mysql from "../assets/mysql.svg";
import postgresql from "../assets/postgresql.svg";

export const browserLibrary = [
  {
    title: "BASIC RESOURCE MONITORING",
    rules: [
      {
        title: "Prometheus self-monitoring",
        fetchUrl:
          "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/prometheus-self-monitoring/embedded-exporter.yml",
        icon: prometheus,
        rulesCount: "28 rules",
        description:''
      },
      {
        title: "Host and hardware",
        fetchUrl:
          "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/host-and-hardware/node-exporter.yml",
        icon: puzzle,
        rulesCount: "38 rules",
      },
      {
        title: "S.M.A.R.T Device Monitoring",
        fetchUrl:
          "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/s.m.a.r.t-device-monitoring/smartctl-exporter.yml",
        icon: puzzle,
        rulesCount: "5 rules",
      },
      {
        title: "Docker containers",
        fetchUrl:
          "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/docker-containers/google-cadvisor.yml",
        icon: docker,
        rulesCount: "9 rules",
      },
      {
        title: "Blackbox",
        fetchUrl:
          "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/blackbox/blackbox-exporter.yml",
        icon: puzzle,
        rulesCount: "5 rules",
      },
      {
        title: "Windows Server",
        fetchUrl:
          "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/windows-server/windows-exporter.yml",
        icon: windows,
        rulesCount: "9 rules",
      },
      {
        title: "VMware",
        fetchUrl:
          "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/vmware/pryorda-vmware-exporter.yml",
        icon: vmware,
        rulesCount: "4 rules",
      },
      {
        title: "Netdata",
        fetchUrl:
          "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/netdata/embedded-exporter.yml",
        icon: netdata,
        rulesCount: "9 rules",
      },
    ],
  },
  {
    title: "DATABASES AND BROKERS",
    rules: [
      {
        title: "MySQL",
        fetchUrl:
          "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/mysql/mysqld-exporter.yml",
        icon: mysql,
        rulesCount: "10 rules",
      },
      {
        title: "PostgreSQL",
        fetchUrl:
          "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/postgresql/postgres-exporter.yml",
        icon: postgresql,
        rulesCount: "21 rules",
      },
      {
        title: "SQL Server",
        fetchUrl:
          "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/sql-server/ozarklake-mssql-exporter.yml",
        icon: mysql,
        rulesCount: "2 rules",
      },
      {
        title: "Patroni",
        fetchUrl:
          "https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/patroni/embedded-exporter-patroni.yml",
        icon: puzzle,
        rulesCount: "1 rules",
      },
    ],
  },
];
