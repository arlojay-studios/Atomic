# Atomic
Typescript chatroom wrapper for [`neutron`](#neutron), [`proton`](#proton), and [`electron`](#electron).

[//]: <build: installer, package, move packages to npm, ui>

### Imagine a network...
Our goal is to have a fully peer-to-peer server network for safe and secure chat across the web, without all the tracking and monitoring bundled in most social media apps nowadays.

[//]: <(even when it comes to something like workplace monitoring! see our [solutions]())>

----

### electron
[Electron](../../../electron) is our default web client, served by [neutron](#neutron)

#### Features
> Still a work in progress

----

### neutron
[Neutron](../../../neutron) is our express powered server module, using the [`proton`](#proton) API and serving our default web client, [`electron`](#electron)

#### Internals
> [`neutronServer`](../../../neutron/blob/main/index.ts#L16) is primarily an express server, holding the handle to the [`protonDB`](../../../proton/blob/main/core.ts#L18)  before passing it off to Atomic's [`Wrapper`](/index.ts#L34)  class for production

----

### proton
[Proton](../../../proton), our best work, is our completely modular API system for Atomic. For a list of modules, see [here](../../../proton/blob/main/README.md#current-api-modules)
