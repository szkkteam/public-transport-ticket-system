const VendingMachine = artifacts.require("VendingMachine");
const Ticket = artifacts.require("Ticket");

module.exports = async (deployer, network, [defaultAccount]) => {

    await deployer.deploy(Ticket);

    const ticket = await Ticket.deployed();

    await deployer.deploy(VendingMachine, ticket.address);
    const contract = await VendingMachine.deployed();

    await ticket.transferOwnership(contract.address);

    console.log(
        `Ticket deployed at ${ticket.address} in network: ${network}.`
    );
    console.log(
        `VendingMachine deployed at ${contract.address} in network: ${network}.`
    );
}
