/* eslint-disable prettier/prettier */
// internal import
const OrderModel = require('../models/order');

// create a Order
const postOrder = async (req, res) => {
        try {
            const newOrder = new OrderModel(req.body);
            const Order = await newOrder.save();

            res.status(200).json({
                message: Order,
            });
        } catch {
            res.status(500).json({
                error: 'Failed to create a Order',
            });
        }
};

// update a Order
const updateOrder = async (req, res) => {
    if (req.user.isAdmin) {
        try {
            const updatedOrder = await OrderModel.findByIdAndUpdate(
                req.params.id,
            {
                $set: req.body,
            }, {
                new: true,
                },
            );

            res.status(200).json({
                message: updatedOrder,
            });
        } catch {
            res.status(500).json({
                error: 'Failed to update a Order',
            });
        }
    } else {
        res.status(500).json({
            error: 'Failed to update a Order!',
        });
    }
};

// delete a Order
const deleteOrder = async (req, res) => {
    if (req.user.isAdmin) {
        try {
            await OrderModel.findByIdAndDelete(req.params.id);

            res.status(200).json({
                message: 'Order deleted.',
            });
        } catch {
            res.status(500).json({
                error: 'Failed to delete a Order',
            });
        }
    } else {
        res.status(500).json({
            error: 'Failed to delete a Order!',
        });
    }
};

// find a user Order
const findOneOrder = async (req, res) => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
        try {
            const Order = await OrderModel.find({ userId: req.params.userId });

            res.status(200).json({
                message: Order,
            });
        } catch {
            res.status(500).json({
                error: 'Failed to find Order',
            });
        }
    } else {
        res.status(500).json({
                error: 'Failed to find Order',
            });
    }
};

// get all
const getAll = async (req, res) => {
    if (req.user.isAdmin) {
        try {
            const allOrder = await OrderModel.find();

            res.status(200).json({
                message: allOrder,
            });
        } catch (error) {
            res.status(500).json({
                error: 'Failed to find Order',
            });
        }
    } else {
        res.status(500).json({
            error: 'Failed to find Order',
        });
    }
};

// get monthly income
const getMonthlyInc = async (req, res) => {
    if (req.user.isAdmin) {
        try {
            const date = new Date();
            const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
            const prevMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));

            const income = await OrderModel.aggregate([
                {
                    $match: {
                        createdAt: {
                            $gte: prevMonth,
                        },
                    },
                },
                {
                    $project: {
                        month: {
                            $month: '$createdAt', // 1:42m
                        },
                        sales: '$amount',
                    },
                },
                {
                        $group: {
                            _id: '$month',
                            total: { $sum: '$sales' },
                        },
                },
            ]);

            res.status(200).json({
                message: income,
            });
        } catch (error) {
            res.status(500).json({
                error: 'Failed to find Order',
            });
        }
    } else {
        res.status(500).json({
            error: 'Failed to find Order',
        });
    }
};

module.exports = {
    postOrder, updateOrder, deleteOrder, findOneOrder, getAll, getMonthlyInc,
};
