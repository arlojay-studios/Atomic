# Atomic
Typescript chatroom wrapper for [`neutron`](github.com/arlojay-studios/neutron), [`proton`](github.com/arlojay-studios/proton), and [`electron`](github.com/arlojay-studios/electron).

[//]: <build: installer, package, move packages to npm, ui>

### Imagine a network...
Our goal is to have a fully peer-to-peer server network for safe and secure chat across the web, without all the tracking and monitoring bundled in most social media apps nowadays.

[//]: <(even when it comes to something like workplace monitoring! see our [solutions]())>

----

### electron
[Electron](github.com/arlojay-studios/electron) is our default web client, served by [neutron](#neutron)

#### Features
> Still a work in progress

----

### neutron
[Neutron](github.com/arlojay-studios/neutron) is our express powered server module, using the [`proton`](#proton) API and serving our default web client, [`electron`](#electron)

#### Internals
> [`neutronServer`](github.com/arlojay-studios/neutron/blob/main/index.ts#L16) is primarily an express server, holding the handle to the [`protonDB`](github.com/arlojay-studios/neutron/blob/main/cpre.ts#L18)  before passing it off to Atomic's [`Wrapper`](github.com/arlojay-studios/atomic/blob/main/index.ts#L34)  class for production

----

### proton
[Proton](github.com/arlojay-studios/proton), our best work, is our completely modular API system for Atomic. For a list of modules, see [here](github.com/arlojay-studios/proton/blob/main/README.md#current-api-modules)