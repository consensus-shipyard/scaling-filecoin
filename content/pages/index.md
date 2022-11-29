---
draft: true
blocks:
  - style:
      alignment: 'flex-row-reverse text-left items-center items-start-vertical '
      featureContent: 'w-1/2 min-h-0 '
      padding: pt-44 pb-40 pr-16 pl-5
      featureImage: 'object-left object-contain '
      imagePadding: pt-0 pb-0 pr-0 pl-0
      labelStyles: 'text-white font-2 text-xl mb-0 '
      headlineStyles: 'text-primary font-1 text-8xl mb-8 '
      subheadStyles: 'text-primary font-1 text-5xl mb-10 '
      textStyles: 'text-white font-1 text-lg mb-11 '
      contentOrder: labelHeadingsContent
    background:
      fillStyles: bg-black
      src: >-
        https://res.cloudinary.com/protocolai/image/upload/v1666840499/scaling-filecoin/scaling-filecoin-feature-bg_vqvtwq.png
    image:
      src: ''
      alt: ''
    label: ''
    headline: Scaling Filecoin
    subhead: >-
      Interplanetary consensus is the next frontier in blockchain scalability,
      unlocking unmatched capacity and enabling new use cases.
    body: ''
    _template: feature
  - style:
      textAlignment: text-left
      minHeight: min-h-0
      padding: pt-10 pb-10 pr-5 pl-5
      contentWidth: w-full
      columns: '2'
      labelStyles: 'text-primary font-1 text-xl mb-0 '
      headlineStyles: 'text-white undefined text-4xl mb-11 '
      subheadStyles: text-primary undefined text-3xl mb-0 font-bold
      textStyles: 'text-primary undefined text-base mb-0 '
      contentOrder: labelHeadingsContent
    cardStyle:
      padding: 'pt-5 pb-5 pr-0 pl-0 sm:pt-5 sm:pb-0 sm:pr-0 sm:pl-0'
      type: solid
      borderStyles: border-primary border-0
      labelStyles: 'text-primary undefined text-sm mb-0 '
      headlineStyles: 'text-primary font-1 text-4xl mb-4 '
      subheadStyles: 'text-primary undefined text-lg mb-0 '
      textStyles: 'text-primary undefined text-base mb-5 '
      buttonType: secondary
    background:
      fillStyles: bg-black
    label: ''
    headline: ''
    subhead: ''
    body: ''
    items:
      - headline: ''
        subhead: ''
        text: >
          Consensus poses a major scalability bottleneck in blockchain networks.
          This is particularly the case when all validators are required to
          process all transactions, as is the case for Filecoin, which renders
          the network unable to increase its performance by adding more
          participants (scale-out).


          Moreover, not every application benefits from using the same consensus
          algorithm: different applications may have different performance and
          security requirements, making it difficult for a single blockchain
          network with a single consensus layer to accommodate any type of web3
          application.
        link: ''
        buttonLabel: ''
      - headline: ''
        subhead: ''
        text: >
          Interplanetary Consensus (IPC) is a framework to enable on-demand
          horizontal scalability of Filecoin by deploying subnets
          (self-governing chains) that spawn their own state, validate messages
          in parallel, and seamlessly interact with any network in the
          hierarchy, as well as with the Filecoin root network. Subnets can run
          different consensus algorithms, depending on application requirements.


          IPC is complementary to the programmability introduced by FVM: it
          provides a framework to further program the Filecoin network,
          accommodating a variety of use cases while overcoming potential
          consensus bottlenecks, to load balance decentralised applications by
          spawning new blockchain substrates on-demand, and to tailor the system
          to better fit application needs.
    navigationLabel: ''
    _template: textCards
  - style:
      textAlignment: text-left
      minHeight: min-h-0
      padding: pt-20 pb-20 pr-10 pl-5
      width: normal
      labelStyles: 'text-black font-1 text-sm mb-0 '
      headlineStyles: 'text-black font-1 text-5xl mb-0 '
      subheadStyles: 'text-black font-1 text-3xl mb-0 '
      textStyles: 'text-black font-1 undefined mb-0 '
      contentOrder: labelHeadingsContent
    label: ''
    headline: Components
    subhead: ''
    body: ''
    navigationLabel: Components
    _template: banner
  - style:
      alignment: 'flex-row-reverse text-left items-center items-start-vertical '
      featureContent: 'w-1/2 min-h-0 '
      padding: 'pt-20 pb-10 pr-32 pl-5 sm:pt-10 sm:pb-10 sm:pr-5 sm:pl-5'
      featureImage: 'object-center object-contain '
      imagePadding: pt-0 pb-0 pr-0 pl-0
      labelStyles: 'text-primary font-1 text-sm mb-0 '
      headlineStyles: 'text-primary font-1 text-4xl mb-7 '
      subheadStyles: 'text-primary font-1 text-3xl mb-0 '
      textStyles: 'text-primary font-1 text-base mb-5 '
      contentOrder: labelHeadingsContent
    background:
      fillStyles: bg-black
    image:
      src: >-
        https://res.cloudinary.com/protocolai/image/upload/v1668821498/scaling-filecoin/hc-paper_dhjbzd.png
    label: ''
    headline: Interplanetary Consensus
    subhead: ''
    body: >
      Unlike traditional sharding designs, based on the explicit partitioning of
      the network’s state, our solution centres on the concept of subnets that
      can be spawned on-demand to manage new state. Subnets are organised in a
      hierarchy, in which parent subnets are firewalled from child subnets, have
      their own policies, and run a different consensus algorithm, increasing
      the network’s capacity and enabling new applications. Subnets leverage the
      security of parent subnets by periodically checkpointing state and include
      mechanisms to interact with other subnets in the system. IPC subnets can
      be configured to resemble different L2 platforms: from an optimistic or
      ZK-rollup, to a side-chain with a native communication bridge.
    buttons:
      - label: Paper
        link: >-
          https://research.protocol.ai/publications/hierarchical-consensus-a-horizontal-scaling-framework-for-blockchains/delarocha2022.pdf
        type: primary
      - label: Spec
        link: >-
          https://github.com/protocol/ConsensusLab/blob/main/specs/hierarchical_consensus.md
        type: primary
    navigationLabel: ''
    _template: feature
  - style:
      alignment: 'flex-row text-left items-center items-start-vertical '
      featureContent: 'w-1/2 min-h-0 '
      padding: 'pt-20 pb-10 pr-5 pl-32 sm:pt-10 sm:pb-10 sm:pr-5 sm:pl-5'
      featureImage: 'object-center object-contain '
      imagePadding: pt-0 pb-0 pr-0 pl-0
      labelStyles: 'text-primary font-1 text-sm mb-0 '
      headlineStyles: 'text-primary font-1 text-4xl mb-7 '
      subheadStyles: 'text-primary font-1 text-3xl mb-0 '
      textStyles: 'text-primary font-1 text-base mb-7 '
      contentOrder: labelHeadingsContent
    background:
      fillStyles: bg-black
    image:
      src: >-
        https://res.cloudinary.com/protocolai/image/upload/v1668821864/scaling-filecoin/mir-paper_hs5tye.png
    label: ''
    headline: Mir and Trantor
    subhead: ''
    body: >
      Mir is a framework for implementing, debugging, and analyzing distributed
      protocols. We use Mir to implement Trantor, a state machine replication
      system that establishes a total order of client requests with typical
      liveness and safety properties. Trantor achieves scalability without
      requiring a primary node to periodically decide on the protocol
      configuration. It multiplexes multiple instances of a leader-driven
      consensus protocol which operate concurrently and almost independently.
    buttons:
      - label: Paper
        link: >-
          https://research.protocol.ai/publications/mir-bft-scalable-and-robust-bft-for-decentralized-networks/vukolic2022.pdf
        type: primary
      - label: Code
        link: 'https://github.com/filecoin-project/mir'
        type: primary
    navigationLabel: ''
    _template: feature
  - style:
      textAlignment: text-left
      minHeight: min-h-0
      padding: pt-20 pb-10 pr-10 pl-5
      width: normal
      labelStyles: 'text-black font-1 text-sm mb-0 '
      headlineStyles: 'text-black font-1 text-5xl mb-0 '
      subheadStyles: 'text-black font-1 text-3xl mb-0 '
      textStyles: 'text-black font-1 undefined mb-0 '
      contentOrder: labelHeadingsContent
    label: ''
    headline: Applications
    subhead: ''
    body: ''
    _template: banner
  - style:
      textAlignment: text-left
      minHeight: min-h-0
      padding: pt-10 pb-10 pr-5 pl-5
      contentWidth: w-full
      columns: '4'
      labelStyles: 'text-black undefined text-xl mb-0 '
      headlineStyles: 'text-black undefined text-4xl mb-10 '
      subheadStyles: 'text-black undefined text-3xl mb-0 '
      textStyles: 'text-black undefined text-lg mb-0 '
      contentOrder: labelHeadingsContent
    cardStyle:
      fillStyles: bg-primary
      padding: pt-5 pb-5 pr-0 pl-0
      type: transparent
      imageStyles: h-14 object-contain object-left mb-3
      labelStyles: 'text-black undefined text-sm mb-0 '
      headlineStyles: 'text-black undefined text-2xl mb-4 '
      subheadStyles: 'text-black undefined text-lg mb-0 '
      textStyles: 'text-black undefined text-base mb-5 '
      buttonType: primary
    background:
      src: ''
      position: object-left-bottom
    label: ''
    headline: ''
    subhead: ''
    body: ''
    items:
      - image:
          src: >-
            https://res.cloudinary.com/protocolai/image/upload/v1669079002/scaling-filecoin/hardware-chip-outline_z7kkoj.svg
        headline: Computation
        text: |
          Spawn ephemeral subnets to run distributed computation jobs.
        link: ''
        buttonLabel: ''
      - image:
          src: >-
            https://res.cloudinary.com/protocolai/image/upload/v1669078998/scaling-filecoin/share-social-outline_zkctna.svg
        headline: Coordination
        text: >
          Assemble into smaller subnets for decentralised orchestration.
          Coordinate resources with high throughput and low fees.
        link: ''
        buttonLabel: ''
      - image:
          src: >-
            https://res.cloudinary.com/protocolai/image/upload/v1669078994/scaling-filecoin/globe-outline_pdnjh8.svg
        headline: Localisation
        text: >
          Leverage proximity to improve performance. Operate at very low latency
          in geographically constrained settings.
        link: ''
        buttonLabel: ''
      - image:
          src: >-
            https://res.cloudinary.com/protocolai/image/upload/v1669156809/scaling-filecoin/cloud-offline-outline_yweylq.svg
        label: ''
        headline: Partition tolerance
        subhead: ''
        text: >
          Deploy blockchain substrates in mobile settings or environments with
          limited connectivity.
    navigationLabel: Applications
    _template: photoCards
  - style:
      textAlignment: text-center
      minHeight: min-h-0
      padding: 'pt-20 pb-20 pr-28 pl-28 sm:pt-14 sm:pb-14 sm:pr-5 sm:pl-5'
      width: normal
      labelStyles: 'text-primary undefined text-xl mb-0 '
      headlineStyles: 'text-white undefined text-5xl mb-7 '
      subheadStyles: 'text-primary undefined text-xl mb-7 '
      textStyles: 'text-primary undefined text-base mb-0 '
      contentOrder: labelHeadingsContent
    background:
      fillStyles: from-accent2 to-accent3 bg-gradient-to-r
    label: ''
    headline: Spacenet
    subhead: >-
      An early builder testnet for Interplanetary Consensus, Mir, and Trantor.
      High throughput and low latency with smart contract capabilities, powered
      by FVM. 
    body: "Spacenet is not\_just another\_Filecoin testnet. By adopting a high-performance consensus implementation of Trantor over Mir, we have increased the network's throughput while reducing the block time to around 1 second.  As FVM onboards a gamut of new applications to the Filecoin network, many use cases will have requirements beyond what Filecoin can accommodate. Spacenet provides developers with a testbed to deploy those FVM use cases and innovate with new Web3 applications. Once IPC is released in Spacenet, in early 2023, developers will be able to deploy their own subnets from Spacenet while maintaining the ability to seamlessly interact with state and applications in the original network.\n"
    navigationLabel: Spacenet
    _template: banner
  - style:
      textAlignment: text-center
      minHeight: min-h-0
      padding: pt-10 pb-10 pr-5 pl-5
      contentWidth: w-full
      columns: '3'
      labelStyles: 'text-primary font-1 text-xl mb-0 '
      headlineStyles: 'text-white undefined text-4xl mb-11 '
      subheadStyles: 'text-primary undefined text-3xl mb-0 '
      textStyles: 'text-primary undefined text-base mb-0 '
      contentOrder: labelHeadingsContent
    cardStyle:
      fillStyles: from-accent2 to-accent3 bg-gradient-to-br
      padding: 'pt-9 pb-5 pr-9 pl-9 sm:pt-5 sm:pb-0 sm:pr-5 sm:pl-5'
      type: solid
      borderStyles: border-primary border-0
      labelStyles: 'text-primary undefined text-sm mb-0 '
      headlineStyles: 'text-primary font-1 text-7xl mb-7 '
      subheadStyles: 'text-primary undefined text-lg mb-0 '
      textStyles: 'text-primary undefined text-xl mb-5 '
      buttonType: secondary
    background:
      fillStyles: bg-black
    label: ''
    headline: Alpha performance targets
    subhead: ''
    body: ''
    items:
      - headline: 1 s
        subhead: ''
        text: |
          Subnet latency
        link: ''
        buttonLabel: ''
      - headline: '1000'
        subhead: ''
        text: |
          Subnet TPS
      - headline: '100'
        subhead: ''
        text: |
          Subnets
    navigationLabel: ''
    _template: textCards
  - style:
      textAlignment: text-center
      minHeight: min-h-0
      padding: 'pt-10 pb-20 pr-28 pl-28 sm:pt-10 sm:pb-14 sm:pr-5 sm:pl-5'
      width: normal
      labelStyles: 'text-primary undefined text-xl mb-0 '
      headlineStyles: 'text-white undefined text-5xl mb-0 '
      subheadStyles: 'text-primary undefined text-3xl mb-0 '
      textStyles: 'text-primary undefined text-lg mb-10 '
      contentOrder: labelHeadingsContent
    background:
      fillStyles: from-accent2 to-accent3 bg-gradient-to-r
    label: ''
    headline: ''
    subhead: ''
    body: ''
    buttons:
      - label: Ready to lift off?
        link: 'https://github.com/consensus-shipyard/spacenet'
        type: secondary
    navigationLabel: ''
    _template: banner
  - background:
      src: >-
        https://res.cloudinary.com/protocolai/image/upload/v1669080071/scaling-filecoin/scaling-filecoin-trees-background_semi_kqsfit.png
      position: object-left
      ornaments:
        - alignment: bottom-left
    style:
      textAlignment: text-left
      minHeight: min-h-0
      padding: 'pt-20 pb-5 pr-5 pl-5 sm:pt-5 sm:pb-0 sm:pr-5 sm:pl-5'
      contentWidth: w-full
      labelStyles: 'text-black font-1 text-sm mb-0 '
      headlineStyles: 'text-black font-1 text-5xl mb-0 '
      subheadStyles: 'text-black font-1 text-3xl mb-0 '
      textStyles: 'text-black font-1 text-lg mb-24 '
      contentOrder: labelHeadingsContent
    label: ''
    headline: Launch sequence
    subhead: ''
    body: ''
    items:
      - eventDate: Nov 2022
        eventName: 'M1: Spacenet launches with Mir and Trantor'
        summary: >-
          Spacenet launches as a long-running testnet with Mir and Trantor as
          its beating heart. Users can issue transactions and leverage the
          higher-frequency BFT consensus.
      - eventDate: 'Feb 2023 '
        eventName: 'M2: IPC deployed onto Spacenet'
        summary: >-
          Subnets support is added to Spacenet. Developers can now use Spacenet
          to test applications with custom requirements or generating high
          transaction volume. 
      - eventDate: End 2023
        eventName: 'M3: Spacenet docks with Filecoin mainnet'
        summary: >-
          FVM Milestone 2.2 unlocks the ability to deploy Wasm actors on
          Filecoin mainnet. Spacenet anchors to Filecoin mainnet, enabling
          seamless interaction with existing Filecoin storage and applications.
    navigationLabel: Roadmap
    _template: eventList
meta:
  pageTitle: Scaling Filecoin
  pageDescription: Scaling Filecoin
---

