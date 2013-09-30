exec { "apt-get update":
  path => "/usr/bin"
}

file { "/etc/apt/sources.list.d/10gen.list":
  content => "deb http://downloads-distro.mongodb.org/repo/ubuntu-upstart dist 10gen\n",
  owner   => root,
  group   => root,
  mode    => 0644,
  notify  => Exec["apt-get update"]
}

exec { "apt-key 10gen":
  command => "/usr/bin/apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10",
  require => File["/etc/apt/sources.list.d/10gen.list"],
}

package { "mongodb-10gen":
  ensure => '2.4.6',
  require => [File["/etc/apt/sources.list.d/10gen.list"], Exec["apt-key 10gen"]],
}

service { "mongodb":
  ensure => "running",
  require => Package["mongodb-10gen"],
}

