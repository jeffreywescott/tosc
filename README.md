# tosc -- Tokenized Open Source Contributions

This project was inspired by the idea that there are _already_ a few different kinds of "currency" with respect to open-source contributions ... GitHub stars, forks, clones, package downloads, maintainer status, etc. Now, with the advent of [Ethereum][ethereum] and smart contracts, it becomes easier to reward open-source contributors with something resembling "real" currency, and perhaps creating a marketplace where people can be rewarded for contributions that are highly valued.

## Idea

The idea is to create a token called "tosc", which is an [ERC20][ERC20] token. Open-source contributors can reward each other by passing them around, and external stakeholders with an Ethereum account can make monetary offers for defect fixes, feature requests, etc. It's unclear to me (at least right now) whether or not some initial set of tokens will be issued when an open-source project "joins" the tosc ecosystem -- I'm open to ideas.

## Philosophy

In order for this project to be successful, it is probably necessary to build mindshare and credibility within the open-source community at large. This is particularly important in the face of all of the "scam" ICOs and other nonsense going on. I think a governing board will be created, with voting power; perhaps we'll recruit some top contributors from popular projects who are willing to weigh-in on important decisions.

## Contributing

### Getting Started

1. Clone the repo.
2. Run `yarn install`
3. Run `testrpc` (in its own terminal)
4. Run `yarn test`

## License

This software is licensed under the [ISC][./LICENSE] license.

<!-- references -->

[ethereum]: https://www.ethereum.org/
[ERC20]: https://www.ethereum.org/token
